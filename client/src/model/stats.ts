import data from '../data/stats.json';

export interface Stats {
    id: number;
    user: string;
    photo: string;
    type: string;
    calories: number;
    totalDishes: number;
    date: string;
    restaurant: string;
}

export function getStats(): Stats[] {
    return data.stats;
}