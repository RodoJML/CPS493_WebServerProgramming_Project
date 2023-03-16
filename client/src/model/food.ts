import data from '../data/food.json';

export interface FoodItem {
    id: number;
    dish: string;
    calories: number;
    thumbnail: string;
    images: string[];
}

export function getFood(): FoodItem[] {
    return data.food;
}

