import data from '../data/stats.json';
import { computed, ref, reactive } from 'vue';

const stats = ref([] as Stats[]);
const statsFiltered = ref([] as Stats[]);
const calculatorData = ref([] as CalCalc[]);

//const userValue = reactive({ user: null as string | null });

stats.value = data.stats;
statsFiltered.value = stats.value.filter((stat) => stat.type === 'Daily' && stat.user === 'RodoJML');

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
        calories: testStat.calories,
        totalDishes: testStat.totalDishes,
        date: JSON.stringify(date) + ' | ' + daysAgo + ' days ago',
        restaurant: testStat.restaurant
    });


}

export function addToCalCalc(calories: number) {
        calculatorData.value.push({
            id: calculatorData.value.length + 1,
            calories: calories
        });
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



/*export function readUser(user: string){
    userValue.user = user;
}*/

export const calcTotal = computed(() => calculatorData.value.reduce((total, calorieData) => total + calorieData.calories, 0));
export const TotalDailyCal = computed(() => statsFiltered.value.reduce((total, dailyCal) => total + dailyCal.calories, 0));