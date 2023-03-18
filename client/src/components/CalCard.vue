<script setup lang="ts">
import { calcTotal, resetCalc } from '@/model/stats';

</script>

<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                Calories Ingested
                <div class="title">
                    {{calcTotal}}
                </div>
            
            <img src="https://assets.stickpng.com/images/5a0c6dfa9642de34b6b65cc9.png" 
            alt="reset" width="160" height="160" @click="resetCalc">
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: white;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

}

.title {
    font-size: 4rem;
    color: darkslategray;
}

</style>