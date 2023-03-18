import data from '../data/stats.json';
import { ref } from 'vue';
import { useSession } from './session';

const session = useSession();
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

/*export function emptyStat(): Stats {
    return {
        id: stats.value.length + 1,
        user: session.user?.user,
        photo: session.user?.photo,
        type: 'Daily',
        calories: 0,
        totalDishes: 0,
        date: '',
        restaurant: ''
    }
}*/

export function addToStats(testStat: Stats, date: Date) {

    var userDate = new Date(date);
    var current = new Date();

    var userMili = userDate.getDate();
    var currentMili = current.getDate();

    stats.value.push({
        id: stats.value.length + 1,
        user: 'Current User',
        photo: 'https://www.getillustrations.com/photos/pack/video/55895-3D-AVATAR-ANIMATION.gif',
        type: 'Daily',
        calories: testStat.calories,
        totalDishes: testStat.totalDishes,
        date: JSON.stringify(date),
        restaurant: testStat.restaurant
    });

    alert(userMili);
    alert(currentMili);
}


export function useStats() {
    return stats;
}

export function getStats(): Stats[] {
    
    return data.stats;
}