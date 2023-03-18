import data from '../data/stats.json';
import { ref } from 'vue';
import type { User } from './session';

const stats = ref([] as Stats[]);
stats.value = data.stats;

export interface Stats {
    id?: number;
    user?: string;
    photo?: string;
    type?: string;
    calories?: number;
    totalDishes?: number;
    date?: string;
    restaurant?: string;
}

export function addToStats(testStat: Stats, date: Date, photo: string | undefined, user: string | undefined) {

    var userDate = new Date(date).getDate();
    var current = new Date().getDate();

    var daysAgo = (current - userDate) - 1;

    stats.value.push({
        id: stats.value.length + 1,
        user: user,
        photo: photo,
        type: 'Daily',
        calories: testStat.calories,
        totalDishes: testStat.totalDishes,
        date: JSON.stringify(date) + ' | ' + daysAgo + ' days ago',
        restaurant: testStat.restaurant
    });
}


export function useStats() {
    return stats;
}

export function getStats(): Stats[] {
    
    return data.stats;
}