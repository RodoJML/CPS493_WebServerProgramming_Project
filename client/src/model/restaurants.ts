import { api } from './session';
import type { DataEnvelopeList } from './myFetch';
import { useSession } from './session';

const session = useSession();

export interface Restaurant {
    name: string;
}

export function getRestaurants(): Promise<DataEnvelopeList<Restaurant>> {
    return api('/restaurants', null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token});
}

