const express = require('express');
const router = express.Router();
const model = require('../models/restaurants');

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
            res.send(data.restaurants);
        })
        .catch(next);
    });

module.exports = router;
