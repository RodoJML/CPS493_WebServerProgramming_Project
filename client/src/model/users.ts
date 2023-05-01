import { api } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';

export interface User{
    id?: number;
    name?: string;
    email?: string;
    user?: string;
    password?: string;
    photo?: string;
    token?: string;
}

export function getUsers(): Promise<DataEnvelopeList<User>> {
    return api('/users');
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

