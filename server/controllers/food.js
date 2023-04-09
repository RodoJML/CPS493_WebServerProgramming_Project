const express = require('express');
const router = express.Router();
const model = require('../models/food');


router.get('/', (req, res) => {
    const allFood = model.getFood();
    const data = {data: allFood, total: allFood.length, isSuccess: true}; 
    // Return as data envelope
    res.send(data)
})

router.get('/search/:name', (req, res) => {
    const  term = req.params.name;
    const foodResult = model.searchFood(term);
    const data = { data: foodResult, total: foodResult.length, isSuccess: true };
    res.send(data);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const food = model.getFoodById(id);
    const data = { data: food, isSuccess: true };
    res.send(data);
})

router.post('/', (req, res) => {
    const food = req.body;
    model.addFood(food);
    const data = { data: food, isSuccess: true };
    res.send(data);
})

router.patch('/:id', (req, res) => {
    const food = req.body;
    model.updateFood(food);
    const data = { data: food, isSuccess: true };
    res.send(data);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    model.deleteFood(id);
    const data = { isSuccess: true };
    res.send(data);
});

