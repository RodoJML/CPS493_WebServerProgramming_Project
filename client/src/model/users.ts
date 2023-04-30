import { api } from './session';
import type { User } from './session';
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