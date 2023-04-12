import { api } from './session';
import type { User } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';

export function getUsers(): Promise<DataEnvelopeList<User>> {
    return api('/users');
}