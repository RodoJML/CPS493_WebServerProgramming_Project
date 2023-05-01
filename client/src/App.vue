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

  <!-- Forcing assets into build, as these url as loaded from the DB -->
  <div v-if="false">
    <img src="@/assets/Donut.png"><img>
    <img src="@/assets/Drumstick.png"><img>
    <img src="@/assets/fnd.png"><img>
    <img src="@/assets/Fries.png"><img>
    <img src="@/assets/Glass_Drink.png"><img>
    <img src="@/assets/Hot_Dog.png"><img>
    <img src="@/assets/kcal.png"><img>
    <img src="@/assets/Sandwich.png"><img>
    <img src="@/assets/settings.png"><img>
    <img src="@/assets/settings2.png"><img>
    <img src="@/assets/Soda_Can.png"><img>
    <img src="@/assets/Soda_Cup.png"><img>
  </div>
  
</template>

<style scoped>
header {
  background-color: #FEB84B;
}

</style>
