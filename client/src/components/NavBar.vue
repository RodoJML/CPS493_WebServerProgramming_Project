<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from '@/components/LoginBadge.vue';

const isMenuActive = ref(false);

function toggleMenu() {
    isMenuActive.value = !isMenuActive.value;
}

</script>

<template>
    <nav class="navbar is-warning">
        <div class="container">
            <div class="navbar-brand">

                <RouterLink to="/" class="navbar-item">
                    <img src="@/assets/fnd.png" alt="foodLogo" width="28" height="28">
                    <div class="title">Cal<span class="titleC">C</span></div>
                </RouterLink>

                <div class="navbar-burger" :class="{'is-active': isMenuActive}" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu" :class="{'is-active': isMenuActive}">
                <div class="navbar-start">
                    
                    <RouterLink to="/dashboard" class="navbar-item" @click="">
                        <i class="fa-solid fa-gauge"></i>&nbsp
                        Dashboard
                    </RouterLink>

                    <RouterLink to="/meals" class="navbar-item">
                        <i class="fa-solid fa-person-dots-from-line"></i>&nbsp
                        My Meals
                    </RouterLink>
                    

                    <RouterLink to="/food" class="navbar-item">
                        <i class="fa-solid fa-calculator"></i>&nbsp
                        CalC
                    </RouterLink>

                    <RouterLink to="/friends" class="navbar-item">
                        <i class="fa-solid fa-users"></i>&nbsp
                        Friends
                    </RouterLink>

                </div>

                <div class="navbar-end">

                    <LoginBadge/>

                    <RouterLink to="/admin" class="navbar-item">
                        <i class="fa-solid fa-gear"></i>
                    </RouterLink>
                    
                    <a class="navbar-item" href="https://github.com/RodoJML/CPS493_Web_Server_Programming_Project">
                        <button class="button is-link is-rounded is-focused">
                            <i class="fa-brands fa-github"></i>
                        </button>
                    </a>

                    <a class="navbar-item" href="https://instagram.com/rodojml?igshid=Mzc1MmZhNjY=">
                        <button class="button is-danger is-rounded is-focused">
                            <i class="fa-brands fa-instagram"></i>
                        </button>
                    </a>
                    
                </div>

            </div>
        </div>
        
    </nav>
</template>

<style scoped>
.title {
    color: sienna;
}

.titleC {
    color: darkslategray;
}

.navbar-item {
    color: sienna;
}
</style>