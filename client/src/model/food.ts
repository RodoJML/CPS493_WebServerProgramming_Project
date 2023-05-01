import { api } from './session';
import type { DataEnvelope, DataEnvelopeList } from './myFetch';
import { useSession } from './session';

const session = useSession();   
export interface FoodItem {
    id: number;
    dish: string;
    calories: number;
    thumbnail: string;
    images: string[];
}

export function getFood(): Promise<DataEnvelopeList<FoodItem>> {
    return api('/food', null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function getFoodById(id: number): Promise<DataEnvelope<FoodItem>> {
    return api(`/food/${id}`, null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function searchFood(query: string): Promise<DataEnvelopeList<FoodItem>> {
    return api(`/food/search/${query}`, null, 'GET', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function addFood(food: FoodItem): Promise<DataEnvelope<FoodItem>> {
    return api('/food', food, 'POST', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function updateFood(food: FoodItem): Promise<DataEnvelope<FoodItem>> {
    return api(`/food/`, food, 'PATCH', { 'Authorization': 'Bearer ' + session.user?.token});
}

export function deleteFood(id: number): Promise<DataEnvelope<FoodItem>> {
    return api(`/food/${id}`, null, 'DELETE', { 'Authorization': 'Bearer ' + session.user?.token});
}