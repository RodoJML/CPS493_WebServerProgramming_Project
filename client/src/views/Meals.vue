<script setup lang="ts">
import { ref } from 'vue';
import { getStats, addStat, removeStat, type Stats } from '@/model/stats';
import { getRestaurants } from '@/model/restaurants';
import type { Restaurant } from '@/model/restaurants';
import { useSession } from '@/model/session';
import { useRouter } from 'vue-router';
import { useUsers, getUsers, type User } from '@/model/users';
import AutoComplete from 'primevue/autocomplete';

const stats = ref<Stats[]>([]);
const restaurants = ref<Restaurant[]>([]);
const users = useUsers();

getStats().then((result) => {
    stats.value = result.data;
});

getRestaurants().then((result) => {
    restaurants.value = result.data;
});

const session = useSession();
const router = useRouter();

const isModalActive = ref(false);
const newStat: Stats = ({} as any) as Stats;
var date = new Date();

function toggleModal() { isModalActive.value = !isModalActive.value }

let restaurantsFolder = import.meta.env.VITE_SERVER_URL + "/static/restaurants/";
let usersFolder = import.meta.env.VITE_SERVER_URL + "/static/users/";

// Trying to implement autocomplete 

const items = ref([] as String[]);

// async function search(event: {query: String}) {
//    const data  = await users.search(event.query);
//    items.value = data;
// }

</script>

<template>
    <div class="columns">
        <div class="column"></div>
        <div class="column is-three-quarters">
            <div class="title">I'm eating...</div>


            <div class="loading" v-if="!stats.length">
                <i class="fa-solid fa-cookie-bite fa-shake fa-8x"></i>
            </div>

            <button class="button is-warning is-focused is-fullwidth" @click="toggleModal">
                <i class="fa-solid fa-cookie-bite"> Eat </i>
            </button>
            <div class="modal" :class="{ 'is-active': isModalActive }">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Share your calories</p>
                        <button class="delete" aria-label="close" @click="toggleModal"></button>
                    </header>
                    <form @submit.prevent="addStat(newStat, date, session.user?.photo, session.user?.user)
                        .then(result => {
                            getStats().then((result) => {
                                stats = result.data;
                            })
                        })">

                        <section class="modal-card-body">
                            <div class="field">
                                <label class="label">Date</label>
                                <div class="control">
                                    <input v-model="date" type="date" class="input">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Calories</label>
                                <div class="control">
                                    <input v-model="newStat.calories" class="input" type="text" placeholder="Numbers input">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Restaurant</label>
                                <div class="control">
                                    <div class="select is-warning">
                                        <select v-model="newStat.restaurant">
                                            <option v-for="restaurant in restaurants">{{ restaurant.name }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Dishes</label>
                                <div class="control">
                                    <div class="select">
                                        <select v-model="newStat.totalDishes">
                                            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- <div class="field">
                                <label class="label">Friends</label>
                                <div class="select is-full-width">
                                    <AutoComplete v-model="newStat.taggedUsers" :suggestions="items" @complete="search"/>
                                </div>
                            </div> -->
                   

                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success" type="submit" @click="toggleModal">Submit</button>
                        </footer>
                    </form>
                </div>
            </div>

            <div v-for="stat in stats.slice().reverse()">

                <div class="card"
                    v-if="router.currentRoute.value.path == '/friends' ? stat.type == 'Daily' : stat.type == 'Daily' && stat.user == session.user?.user">


                    <div class="card-image">
                        <figure class="image is-3by1">
                            <img v-bind:src="restaurantsFolder + stat.restaurant + '.jpg'" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img class="userImage" :src="usersFolder + stat.photo" alt="Placeholder image">
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
                                <time>
                                    <i class="fa-solid fa-calendar"></i>
                                    {{ stat.date }}
                                </time>
                                &nbsp;
                                <button class="delete" @click="() => {
                                    removeStat(stat._id)
                                        .then(response => {
                                            stats = stats.filter((s) => s._id !== stat._id);
                                        })
                                }"></button>
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

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>