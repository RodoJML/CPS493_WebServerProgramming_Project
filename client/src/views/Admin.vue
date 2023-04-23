<script setup lang="ts">
import { ref } from 'vue';
import { getUsers } from '@/model/session';
import type { User } from '@/model/session';

const users = ref<User[]>([]);

getUsers().then((loadedData) => {
    users.value = loadedData.data;
});

</script>

<template>
    <div class="wrapper">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="/">CalC</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/admin">Users</a></li>
            </ul>
        </nav>
        <button class="button is-warning is-focused">+ Add User</button>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th><abbr title="Photo">Photo</abbr></th>
                    <th><abbr title="Name">Name</abbr></th>
                    <th><abbr title="Email">Email</abbr></th>
                    <th><abbr title="Handle">Handle</abbr></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td> <img class="userImage" :src="user.photo" alt="userImage" width="124" height="124"> </td>
                    <th> {{ user.name }}</th>
                    <td> {{ user.email }}</td>
                    <td> {{ user.user }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br /><br /><br />
</template>

<style scoped>
.userImage {
    border-radius: 0.5rem;
}

.breadcrumb {
    margin: 1rem;
}

.button {
    margin-bottom: 1rem;
}

.eating {

    margin: 1rem;
}
</style>