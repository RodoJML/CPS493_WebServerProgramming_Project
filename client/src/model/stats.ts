import data from '../data/stats.json';
import { computed, ref, reactive } from 'vue';

const stats = ref([] as Stats[]);
const calculatorData = ref([] as CalCalc[]); // For Calculator Tab
const currentUser = reactive({ user1: null as string | null })

stats.value = data.stats;
export interface Stats {
    id: number;
    user?: string;
    photo?: string;
    type: string;
    calories: number;
    totalDishes: number;
    date: string;
    restaurant: string;
}
export interface CalCalc {
    id: number;
    calories: number;
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
        calories: Number(testStat.calories),
        totalDishes: testStat.totalDishes,
        date: JSON.stringify(date) + ' | ' + daysAgo + ' days ago',
        restaurant: testStat.restaurant
    });
}

export function addToCalCalc(calories: number) {
        calculatorData.value.push({
            id: calculatorData.value.length + 1,
            calories: calories
            //And here not?  
        });
}

export function readUser(user: string) {
    currentUser.user1 = user;
}

export function useStats() {
    return stats;
}

export function getStats(): Stats[] {
    return data.stats;
}

export function resetCalc(){
    calculatorData.value = [];
}

export const calcTotal = computed(() => calculatorData.value.reduce((total, calorieData) => total + calorieData.calories, 0));
export const filteredStats = computed(() => stats.value.filter((stat) => stat.type == 'Daily' && stat.user == currentUser.user1));
export const myRecentCalories = computed(() => filteredStats.value.reduce((total, calorieData) => total + calorieData.calories, 0));