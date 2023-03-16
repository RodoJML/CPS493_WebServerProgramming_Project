import data from '../data/userData.json';
import type { Stats } from './stats';

export interface UserData {
    id: number;
    name: string;
    location: string;
    email: string;
    photo: string;
    tweeter: string;
    personalStats: Stats[];
}

export function getUserData(): UserData[] {
    return data.userData;
}