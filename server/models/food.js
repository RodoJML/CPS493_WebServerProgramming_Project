const data = require('../data/food.json');

// This boilerplate is present in all models
const  { connect, ObjectID } = require('./mongo');
const COLLECTION_NAME = "food";

async function collection() {
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}
// -------------------------------------------

async function getFood() {
    const col = await collection();
    const food = await col.find().toArray();
    const total = await col.countDocuments();
    return {food, total};
}

function getFoodById(id) {
    return data.food.find(singleFood => singleFood.id == id);
}

function addFood(food) {
    food.id = data.food.length + 1;
    data.food.push(food);
}

function updateFood(food){
    const index = data.food.findIndex(p => p.id == food.id);
    data.food[index] = food;
}

function deleteFood(id){
    const index = data.food.findIndex(p => p.id == id);
    data.food.splice(index, 1);
}

function searchFood(searchTerm) {
    return data.food.filter(food => {
        return food.dish.toLowerCase().includes(searchTerm.toLowerCase()) 
        || food.calories.toString().includes(searchTerm);
    });
}

async function seed() {
    const col = await collection();
    await col.insertMany(data.food);
}

module.exports = {
    getFood,
    getFoodById,
    addFood,
    updateFood,
    deleteFood,
    searchFood,
    seed,
};
