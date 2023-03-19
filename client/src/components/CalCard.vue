<script setup lang="ts">
import { calcTotal, resetCalc } from '@/model/stats';

</script>

<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                Calories Ingested
                <div class="title">
                    {{ calcTotal }}
                </div>
                <img src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2020/08/reset-button_5f348ce4dedba.png" alt="reset" width="160"
                    height="160" @click="resetCalc">
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