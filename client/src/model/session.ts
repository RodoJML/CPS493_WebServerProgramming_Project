import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { User } from './users';

import * as MyFetch from './myFetch';

const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: 'success' | 'danger' | 'warning' | 'info'
    }[],
    redirectUrl: null as string | null,
})


export function useSession() {
    return session;
}


export function api(url: string, data?: any, method?: string, headers?: any) {

    session.isLoading = true;

    return MyFetch.api(url, data, method, headers)
        .catch(err => {
            console.error({ err });
            session.messages.push({ msg: err.message ?? JSON.stringify(err), type: 'danger' });
        })
        .finally(
            () => {
                session.isLoading = false
            });
}


export function useLogin(user: User) {
    const router = useRouter();

    return async function () {

        const response = await api('/login', user);
        session.user = response.data.user;

        if(!session.user){
            addMessage('Invalid username or password', 'danger');
            return;
        }

        // This doesnt yell at me on user? because is smart enough to see the if statement above
        session.user.token = response.data.token;
        router.push(session.redirectUrl ?? '/');
        session.redirectUrl = null;
    }
}

export function useLogout() {
    const router = useRouter();

    return function () {
        session.user = null;
        router.push('/login');
    }
}

export function addMessage(msg: string, type: 'success' | 'danger' | 'warning' | 'info') {
    session.messages.push({ msg, type });
}

export function deleteMessage(index: number) {
    session.messages.splice(index, 1);
}

