<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <NavBar />
    <div class="container">
      <RouterView />
    </div>
  </header>

  <div v-if="false">
    <img src="@/assets/*"><img>
  </div>
  
</template>

<style scoped>
header {
  background-color: #FEB84B;
}

</style>
