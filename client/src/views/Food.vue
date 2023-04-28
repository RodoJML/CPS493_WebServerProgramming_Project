<script setup lang="ts">
import { getFood, type FoodItem } from '@/model/food';
import { ref } from 'vue';
import { addToCalCalc } from '@/model/stats';

import Flyout from '@/components/Flyout.vue';
import CalCard from '@/components/CalCard.vue';

const foodItems = ref<FoodItem[]>([]);

getFood().then((food) => {
    foodItems.value = food.data;
});

const isCalCardActive = ref(false);

function toggleCalCard() {
    isCalCardActive.value = !isCalCardActive.value;
}
</script>

<template>

    <i v-if="!foodItems.length" class="fas fa-spinner fa-pulse fa-5x"></i>

    <div class="food-list">
        <div class="food-item" v-for="foodItem in foodItems" :key="foodItem.id">
            <br />
            <article class="message is-warning">
                <div class="message-body">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img :src="foodItem.thumbnail" alt="foodImage">
                            </figure>
                        </div>
                        <div class="media-content">
                            <strong class="dish">{{ foodItem.dish }}</strong>
                            <br />
                            <span class="calories">{{ foodItem.calories }}</span> Cal

                        </div>
                        <div class="media-right">
                            <button class="button is-warning is-focused" @click="addToCalCalc(foodItem.calories)" @mouseenter="toggleCalCard" @mouseleave="toggleCalCard">
                                <i class="fa-solid fa-cookie-bite"> Eat </i>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>

    <Flyout :class="{ 'is-active': isCalCardActive}">
        <CalCard />
    </Flyout>

</template>

<style scoped>
.calories {
    color: darkslategray;
    font-size: xx-large;
    font-weight: bold;
}

.cal {
    color: sienna;
}
</style>