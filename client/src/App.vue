<script setup lang="ts">
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <header>

    <NavBar/>

    <div class="container">
      <HomeView/>
    </div>
    
  </header>

</template>

<style scoped>
  header {
    background-color: #FEB84B;
  }

</style>
