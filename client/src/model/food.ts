import { api } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';

export interface FoodItem {
    id: number;
    dish: string;
    calories: number;
    thumbnail: string;
    images: string[];
}

export function getFood(): Promise<DataEnvelopeList<FoodItem>> {
    return api('/food');
}

export function getFoodById(id: number): Promise<DataEnvelope<FoodItem>> {
    return api(`/food/${id}`);
}

export function searchFood(query: string): Promise<DataEnvelopeList<FoodItem>> {
    return api(`/food/search/${query}`);
}

export function addFood(food: FoodItem): Promise<DataEnvelope<FoodItem>> {
    return api('/food', food);
}

export function updateFood(food: FoodItem): Promise<DataEnvelope<FoodItem>> {
    return api(`/food/${food.id}`);
}

export function deleteFood(id: number): Promise<DataEnvelope<FoodItem>> {
    return api(`/food/${id}`);
}