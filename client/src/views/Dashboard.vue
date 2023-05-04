<script setup lang="ts">
import { useSession } from '@/model/session';
import { getStats, type Stats } from '@/model/stats';
import { ref } from 'vue';
import { computed } from 'vue';

const session = useSession();

const stats = ref<Stats[]>([]);

getStats().then((result) => {
    stats.value = result.data;
});

const filteredStats = computed(() => stats.value.filter((stat) => stat.type == 'Daily' && stat.user == session.user?.user));
const myRecentCalories = computed(() => filteredStats.value.reduce((total, calorieData) => total + (+calorieData.calories), 0));

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
                    <br /><br />Add snacks between meals and at bedtime.
                    <br /><br />Keep foods and snacks that are easy to prepare or pre-packaged on hand.
                    <br /><br />Make meal time pleasant.
                    <br /><br />Plan meal times around energy levels.
                    <br /><br />Eat the highest calorie item on your plate first.
                    <br /><br />Make everything you drink count.
                </div>
            </article>
            <div class="column is-half">

                <div class="box" v-if="session.user?.user">
                    <div class="wrapper">
                        <strong>Recent Calories</strong>
                        <div class="title">{{ myRecentCalories }}</div>(*** Calories added on my meals tab)
                    </div>
                </div>

                <img src="@/assets/eating.png" alt="eating" width="500" height="500">
            </div>
            <article class="column message is-warning">
                <div class="message-header">
                    <p>How to Cut Calories</p>
                </div>
                <div class="message-body">
                    Do not skip meals.
                    <br /><br />Swap your snack. Many people reach for a snack or two in between meals.
                    <br /><br />Cut one high-calorie treat. Try to remove one high-calorie food item each day.
                    <br /><br />Do not drink your calories.
                    <br /><br />Make low calorie substitutions.
                    <br /><br />Ask for a doggie bag.
                    <br /><br />Just say "no" to fried food.
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
.column {
    margin: 1rem;
}

.container {
    margin-top: 1rem;
}

.box {
    margin-bottom: 1rem;
}

.title {
    color: chocolate;
    font-size: 5rem;
}

.title.non-dynamic {
    color: lightgray;
    font-size: 5rem;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>