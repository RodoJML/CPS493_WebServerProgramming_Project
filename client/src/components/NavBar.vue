<script setup lang="ts">
    import { RouterLink } from 'vue-router';
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
                    <RouterLink to="/dashboard" class="navbar-item">Dashboard</RouterLink>
                    <RouterLink to="/food" class="navbar-item">Food</RouterLink>
                </div>

                <div class="navbar-end">
                    <RouterLink to="/contact" class="navbar-item">Contact</RouterLink>
                    <RouterLink to="/login" class="navbar-item">Login</RouterLink>
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