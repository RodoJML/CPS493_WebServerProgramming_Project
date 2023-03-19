<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession, useLogin, useLogout, getUsers} from '@/model/session';
    import { resetCalc } from '@/model/stats';

    const session = useSession();
    const logout = useLogout();
    const users = ref(getUsers());

</script>

<template>

    <div class="navbar-item" v-if="session.user">
        <img class="userImage" :src="session.user.photo" alt="eating" width="28" height="28">
        <strong>{{ session.user.name }}</strong>
        <a @click="logout" @mouseup="resetCalc">
            <i class="fa-solid fa-right-from-bracket"></i>
        </a>
        

    </div>

    <div class="navbar-item has-dropdown is-hoverable" v-else>
        <a class="navbar-link">
            Login
        </a>

        <div class="navbar-dropdown">
            <a class="navbar-item" v-for="user in users">
                <a @click="useLogin(user)">
                    {{user.name}}
                </a>
            </a>
        </div>
    </div>


</template>

<style scoped>

.userImage {
    border-radius: 50%;
    margin-right: 0.5rem;
}

.fa-right-from-bracket {
    margin-left: 1rem;
    color: sienna;
}


</style>