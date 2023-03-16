<script setup lang="ts">
import { ref } from 'vue';
import { getUserData } from '@/model/userData';

</script>

<template>
    <div class="container">
        <div class="columns">

            <article class="column message is-warning">
                <div class="message-header">
                    <p>Ways to Add Calories</p>
                </div>
                <div class="message-body">
                    Do not skip meals.
                    <br/><br/>Add snacks between meals and at bedtime.
                    <br/><br/>Keep foods and snacks that are easy to prepare or pre-packaged on hand.
                    <br/><br/>Make meal time pleasant.
                    <br/><br/>Plan meal times around energy levels.
                    <br/><br/>Eat the highest calorie item on your plate first.
                    <br/><br/>Make everything you drink count.
                </div>
            </article>

            <div class="column box is-half" v-for="product in products" :key="product.id">TEST</div>

            <div class="column box">TEST</div>
        </div>
    </div>
</template>

<style scoped>
.column {
    margin: 1rem;
}
</style>