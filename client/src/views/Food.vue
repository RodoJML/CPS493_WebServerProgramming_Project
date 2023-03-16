<script setup lang="ts">
import { getFood } from '@/model/food';
import { ref } from 'vue';

const foodItems = ref(getFood());

</script>

<template>
    <div class="food-list">
        <div class="food-item" v-for="foodItem in foodItems" :key="foodItem.id">
            <br/>
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
                            <br/>
                            <span class="calories">{{ foodItem.calories }}</span> 
   
                        </div>

                        <div class="media-right">
                            <button class="button is-warning is-focused"> Eat </button>
                        </div>
                    </div>
                </div>
            </article>
        </div> 
    </div>
    <br/>
</template>

<style scoped>

.calories {
    color: darkslategray;
    font-size: xx-large;
    font-weight: bold;
}

.cal{
    color: sienna;
}

</style>