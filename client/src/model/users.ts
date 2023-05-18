import { api } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';
import { useSession } from './session';
import { ref } from 'vue';

 const session = useSession();
export interface User{
    id?: number;
    name?: string;
    email?: string;
    user?: string;
    password?: string;
    photo?: string;
    token?: string;
}

export function useUsers() {
    const users = ref<User[]>([]);
    
    getUsers().then((result) => {
        users.value = result.data;
    });
    return users;
}

export function getUsers(): Promise<DataEnvelopeList<User>> {
    return api('/users', null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function addUser(user: User): Promise<DataEnvelope<User>> {
    return api('/users', user);
}

export function updateUser(user: User): Promise<DataEnvelope<User>> {
    return api(`/users/${user.id}`, user, 'PATCH');
}

export function deleteUser(id: string): Promise<DataEnvelope<User>> {
    return api(`/users/${id}`, undefined, 'DELETE');
}

