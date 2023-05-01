<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';

require("@/assets/Donut.png");
require("@/assets/Drumstick.png");
require("@/assets/eating.png");
require("@/assets/fnd.png");
require("@/assets/Fries.png");
require("@/assets/Glass_Drink.png");
require("@/assets/Hot_Dog.png");
require("@/assets/kcal.png");
require("@/assets/Sandwich.png");
require("@/assets/settings.png");
require("@/assets/settings2.png");
require("@/assets/Soda_Can.png");
require("@/assets/Soda_Cup.png");
</script>

<template>
  <header>
    <NavBar />
    <div class="container">
      <RouterView />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #FEB84B;
}

</style>
