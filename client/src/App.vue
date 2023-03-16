<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header>

    <NavBar/>

    <div class="container">
      <RouterView/>
    </div>
    
  </header>

</template>

<style scoped>
  header {
    background-color: #FEB84B;
  }

</style>
