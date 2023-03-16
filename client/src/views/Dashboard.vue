<script setup lang="ts">
import { ref } from 'vue';

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

            <div class="column box is-half">TEST</div>

            <article class="column message is-warning">
                <div class="message-header">
                    <p>How to Cut Calories</p>
                </div>
                <div class="message-body">
                    Do not skip meals.
                    <br/><br/>Swap your snack. Many people reach for a snack or two in between meals.
                    <br/><br/>Cut one high-calorie treat. Try to remove one high-calorie food item each day.
                    <br/><br/>Do not drink your calories.
                    <br/><br/>Make low calorie substitutions.
                    <br/><br/>Ask for a doggie bag.
                    <br/><br/>Just say "no" to fried food.
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
.column {
    margin: 1rem;
}

.container{
    margin-top: 1rem;
}
</style>