const data = require('../data/food.json');

function getFood() {
    return data.food;
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

module.exports = {
    getFood,
    getFoodById,
    addFood,
    updateFood,
    deleteFood,
    searchFood
};
