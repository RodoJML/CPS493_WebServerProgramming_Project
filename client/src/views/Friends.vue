<script setup lang="ts">
import { ref } from 'vue';
import { getStats } from '@/model/stats';
const stats = ref(getStats());
</script>

<template>
    <div class="columns">

        <div class="column"></div>

        <div class="column is-three-quarters">

            <button class="button is-warning is-focused is-fullwidth">
                <i class="fa-solid fa-cookie-bite"> Eat </i>
            </button>

            <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Modal title</p>
                        <button class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <!-- Content ... -->
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-success">Save changes</button>
                        <button class="button">Cancel</button>
                    </footer>
                </div>
            </div>

            <div v-for="stat in stats">

                <div class="card" v-if="stat.type == 'Daily'">

                    <div class="card-image">
                        <figure class="image is-3by1">
                            <img v-bind:src="'/src/assets/restaurants/' + stat.restaurant + '.jpg'" alt="Placeholder image">
                        </figure>
                    </div>

                    <div class="card-content">

                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img class="userImage" :src="stat.photo" alt="Placeholder image">
                                </figure>
                            </div>

                            <div class="media-content">
                                @<strong>{{ stat.user }}</strong>
                                <br />
                                <i class="fa-solid fa-location-dot"></i>
                                {{ stat.restaurant }}

                                <div class="columns">
                                    <div class="column">
                                        <div class="title">{{ stat.calories }}</div>Calories
                                    </div>

                                    <div class="column">
                                        <div class="title">{{ stat.totalDishes }}</div>Dishes
                                    </div>
                                </div>

                                <a><i class="fa-solid fa-share"></i></a>
                                <a><i class="fa-solid fa-heart"></i></a>
                                <a><i class="fa-solid fa-retweet"></i></a>

                            </div>

                            <div class="media-right">
                                <time datetime="2016-1-1">{{ stat.date }}</time>
                                &nbsp;
                                <button class="delete"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="column">
        </div>

    </div>
</template>

<style scoped>
.columns {
    margin-top: 1rem;
}

.card {
    margin-bottom: 2rem;
}

.userImage {
    border-radius: 50%;
}

i {
    margin-right: 0.5rem;
}

.button {
    margin-bottom: 1rem;
}
</style>