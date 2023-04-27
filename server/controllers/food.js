const express = require('express');
const router = express.Router();
const model = require('../models/food');

router
    .get('/', (req, res, next) => {
        model.getAll()
        .then( result => {
            const data = { data: result.objects, total: result.total, isSuccess: true };
            res.send(data);
        }).catch(next);
    })

    .get('/:id', (req, res, next) => {
        model.getById(req.params.id)
        .then( result => {
            const data = { data: result.object, total: result.total, isSuccess: true };
            res.send(data);
        }).catch(next);
    })

    .post('/', (req, res, next) => {
        model.add(req.body)
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data);
        }).catch(next);
    })

    .patch('/:id', (req, res, next) => {
        model.update(req.body)
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data);
        }).catch(next);
    })

    .delete('/:id', (req, res, next) => {
        model.remove(req.params.id)
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data);
        }).catch(next);
    })

    .get('/search/:key', (req, res, next) => {
        model.search(req.params.key)
        .then( result => {
            const data = { data: result.objects, total: result.total, isSuccess: true };
            res.send(data);
        }
        ).catch(next);
    })

    .post('/seed', (req, res, next) => {
        model.seed()
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data);
        })
        .catch(next);
    });

module.exports = router;

// Functions below commented out since I dont need them for this project
// these dont have implementation with DB nor the async/await

    // .get('/', (req, res) => {
    //     const allFood = model.getFood();
    //     const data = { data: allFood, total: allFood.length, isSuccess: true };
    //     // Return as data envelope
    //     res.send(data)
    // })

    // .get('/search/:name', (req, res) => {
    //     const term = req.params.name;
    //     const foodResult = model.searchFood(term);
    //     const data = { data: foodResult, total: foodResult.length, isSuccess: true };
    //     res.send(data);
    // })

    // .get('/:id', (req, res) => {
    //     const id = +req.params.id;
    //     const food = model.getFoodById(id);
    //     const data = { data: food, isSuccess: true };
    //     res.send(data);
    // })

    // .post('/', (req, res) => {
    //     const food = req.body;
    //     model.addFood(food);
    //     const data = { data: food, isSuccess: true };
    //     res.send(data);
    // })

    // .patch('/:id', (req, res) => {
    //     const food = req.body;
    //     model.updateFood(food);
    //     const data = { data: food, isSuccess: true };
    //     res.send(data);
    // })

    // .delete('/:id', (req, res) => {
    //     const id = req.params.id;
    //     model.deleteFood(id);
    //     const data = { isSuccess: true };
    //     res.send(data);
    // })
