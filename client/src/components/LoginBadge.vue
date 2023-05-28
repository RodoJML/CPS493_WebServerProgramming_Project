<script setup lang="ts">
import { ref } from 'vue';
import { useSession, useLogin, useLogout } from '@/model/session';
import { resetCalc } from '@/model/stats';
import type { User } from '@/model/users';
import { loadScript, rest } from '@/model/myFetch';
import { useThirdPartyLogin } from '@/model/session';

const loginUser = {} as User;

const session = useSession();
const logout = useLogout();
const login = useLogin();
const thirdPartyLogin = useThirdPartyLogin();

const providerData = {
        provider: "",
        accesToken: null as any
    }

async function googleLogin() {
    // Is this just to get the Google access token?
    await loadScript('https://accounts.google.com/gsi/client', 'google-login');

    const client = google.accounts.oauth2.initTokenClient({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/calendar.readonly \ https://www.googleapis.com/auth/contacts.readonly \
        https://www.googleapis.com/auth/userinfo.profile \ https://www.googleapis.com/auth/userinfo.email',

        // "me" is repeated here and on the server model, should I remove one?
        callback: async (tokenResponse) => {

            thirdPartyLogin({
                provider: "google", 
                accessToken: tokenResponse.access_token
            });
            
        }

    });
    client.requestAccessToken();
}
let usersFolder = import.meta.env.VITE_SERVER_URL + "/static/users/";

</script>

<template>
    <div class="navbar-item" v-if="session.user">
        <img class="userImage" :src="usersFolder + session.user.photo" alt="eating" width="28" height="28">
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
                <input v-model="loginUser.password" type="password" class="password">

                <button class="button is-warning is-focused" @click="login(loginUser)">
                    <i class="jwticon">
                        <img
                            src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png" />
                    </i>
                    <strong> Login</strong>
                </button>

                <button class="button is-warning is-focused" @click="googleLogin">
                    <i class="gicon">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    </i>
                    <strong> Login</strong>
                </button>

            </div>
            
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