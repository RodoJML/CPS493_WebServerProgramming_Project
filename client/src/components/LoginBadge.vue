<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession, useLogin, useLogout} from '@/model/session';
    import { resetCalc } from '@/model/stats';
    import type { User } from '@/model/users';
    import { getUsers } from '@/model/users';

    var loginUser = {
        email: '',
        password: ''
    } as User;

    const session = useSession();
    const logout = useLogout();
    const login = useLogin(loginUser);
    const users = ref<User[]>([]);

    getUsers().then((loadedData) => {
        users.value = loadedData.data;
    });
   
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
            <div class="loginpane">
                <label class="username">Email</label>
                <input v-model="loginUser.email" type="text" class="email">

                <label class="username">Password</label>
                <input v-model="loginUser.password" type="text" class="password">

                <button class="button is-warning is-focused" @click="login">Login</button>

                <p>
                    <br><br>
                    Test User
                    <br>
                    <strong>email: </strong><br>menesesr1@newpaltz.edu
                    <strong>passw: </strong><br>1234abc
                </p>
                
            </div>
            <!-- <a class="navbar-item" v-for="user in users">
                <a @click="useLogin(user)">
                    {{user.name}}
                </a>
            </a> -->
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

.loginpane {
    margin: 1rem;
}

.button {
    margin-top: 1rem;
}


</style>