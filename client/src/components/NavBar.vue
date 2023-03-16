<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LoginBadge from '@/components/LoginBadge.vue';

</script>

<template>
    <nav class="navbar is-warning">
        <div class="container">
            <div class="navbar-brand">

                <RouterLink to="/" class="navbar-item">
                    <img src="@/assets/fnd.png" alt="foodLogo" width="28" height="28">
                    <div class="title">Cal<span class="titleC">C</span></div>
                </RouterLink>

                <div class="navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    
                    <RouterLink to="/dashboard" class="navbar-item">
                        <i class="fa-solid fa-gauge"></i>&nbsp
                        Dashboard
                    </RouterLink>

                    <RouterLink to="/dashboard" class="navbar-item">
                        <i class="fa-solid fa-person-dots-from-line"></i>&nbsp
                        My Meals
                    </RouterLink>
                    

                    <RouterLink to="/food" class="navbar-item">
                        <i class="fa-solid fa-burger"></i>&nbsp
                        Eat
                    </RouterLink>

                    <RouterLink to="/friends" class="navbar-item">
                        <i class="fa-solid fa-search"></i>&nbsp
                        Find Friends
                    </RouterLink>

                </div>

                <div class="navbar-end">

                    <RouterLink to="/admin" class="navbar-item">
                        <i class="fa-solid fa-gear"></i>
                    </RouterLink>
                    
                    <a class="navbar-item" href="https://github.com/RodoJML/CPS493_Web_Server_Programming_Project">
                        <button class="button is-link is-rounded is-focused">
                            <i class="fa-brands fa-github"></i>
                        </button>
                    </a>
                    
                    <LoginBadge/>
                    
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