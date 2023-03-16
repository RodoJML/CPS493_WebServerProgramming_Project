import data from '../data/users.json';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const session = reactive({ user: null as User | null })

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

export function getUsers(): User[] {
    return data.users;
}