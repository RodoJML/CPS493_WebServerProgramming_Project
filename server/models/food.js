const data = require('../data/food.json');

function getFood() {
    return data.food;
}

function getFoodById(id) {
    return data.food.find(food => food.id === id);
}

function addFood(food) {
    food.id = data.food.length + 1;
    data.food.push(food);
}

function updateFood(food){
    const index = data.food.findIndex(p => p.id === food.id);
    data.food[index] = food;
}

function deleteFood(id){
    
}
    
