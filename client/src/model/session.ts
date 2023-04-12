import data from '../../../server/data/users.json';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { DataEnvelope } from './myFetch';
import type { DataEnvelopeList } from './myFetch';

import * as MyFetch from './myFetch';

const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: 'success' | 'danger' | 'warning' | 'info'
    }[],
})
export interface User {
    id?: number;
    name?: string;
    email?: string;
    user?: string;
    photo?: string;
}

export function useSession() {
    return session;
}

export function useLogin(user: User) {
    session.user = user;
    console.log(user.user);
}

export function useLogout() {
    const router = useRouter();

    return function () {
        session.user = null;
        router.push('/');
    }
}

export function addMessage(msg: string, type: 'success' | 'danger' | 'warning' | 'info') {
    session.messages.push({ msg, type });
}

export function deleteMessage(index: number) {
    session.messages.splice(index, 1);
}

export function getUsers(): Promise<DataEnvelopeList<User>> {
    // Retrieve data from actual DB
    return api('/users');
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