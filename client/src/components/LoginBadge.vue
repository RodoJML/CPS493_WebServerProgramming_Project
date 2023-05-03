<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin, useLogout } from '@/model/session';
import { resetCalc } from '@/model/stats';
import type { User } from '@/model/users';
import { getUsers } from '@/model/users';
import { loadScript, rest } from '@/model/myFetch';
import { thirdPartyLogin } from '@/model/session';

var loginUser = {
    email: '',
    password: ''
} as User;

const session = useSession();
const logout = useLogout();
const login = useLogin(loginUser);


const users = ref<User[]>([]);

getUsers().then((loadedData) => {
    users.value = loadedData.data;
});

async function googleLogin() {
    await loadScript('https://accounts.google.com/gsi/client', 'google-login');
    //await loadScript('https://apis.google.com/js/platform.js', 'gapi');

    const client = google.accounts.oauth2.initTokenClient({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/calendar.readonly \
                  https://www.googleapis.com/auth/contacts.readonly',
        callback: async (tokenResponse) => {

            const me = await rest(
                'https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses',
                null, undefined, {
                "Authorization": "Bearer " + tokenResponse.access_token
            });

            const googleuser = {
                id: me.emailAddresses[0].value,
                name: me.names[0].displayName,
                email: me.emailAddresses[0].value,
                photo: me.photos[0].url,
                user: me.resourceName,
                token: tokenResponse.access_token
            } as User;

            thirdPartyLogin(googleuser);

            console.log(me);
        },
    });
    client.requestAccessToken();

}

</script>

<template>
    <div class="navbar-item" v-if="session.user">
        <img class="userImage" :src="session.user.photo" alt="eating" width="28" height="28">
        <strong>{{ session.user.name }}</strong>
        <a @click="logout" @mouseup="resetCalc">
            <i class="fa-solid fa-right-from-bracket"></i>
        </a>
    </div>

    <div class="navbar-item has-dropdown is-hoverable" v-else>
        <a class="navbar-link">
            Login
        </a>

        <div class="navbar-dropdown">

            <div class="loginpane">
                <label class="username">Email</label>
                <input v-model="loginUser.email" type="text" class="email">

                <label class="username">Password</label>
                <input v-model="loginUser.password" type="text" class="password">

                <button class="button is-warning is-focused" @click="login">
                    <i class="jwticon">
                        <img
                            src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png" />
                    </i>
                    <strong> Login</strong>
                </button>

                <button class="button is-warning" @click="googleLogin">
                    <i class="gicon">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    </i>
                    <strong> Login</strong>
                </button>

                <p>
                    <br><br>
                    Test User
                    <br>
                    <strong>email: </strong><br>menesesr1@newpaltz.edu
                    <strong>passw: </strong><br>1234abc
                </p>



            </div>
            <!-- <a class="navbar-item" v-for="user in users">
                <a @click="useLogin(user)">
                    {{user.name}}
                </a>
            </a> -->
        </div>
    </div>
</template>

<style scoped>
.userImage {
    border-radius: 50%;
    margin-right: 0.5rem;
}

.fa-right-from-bracket {
    margin-left: 1rem;
    color: sienna;
}

.loginpane {
    margin: 1rem;
}

.button {
    margin-top: 1rem;
}
</style>