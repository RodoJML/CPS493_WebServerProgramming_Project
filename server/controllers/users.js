const express = require('express');
const router = express.Router();
const model = require('../models/users');
const { requireLogin } = require('../middleware/authorization');

router
    .get('/', requireLogin(true), (req, res, next) => {
        model.getAll()
        .then( result => {
            const data = { data: result.objects, total: result.total, isSuccess: true };
            res.send(data);
        }).catch(next)
    })

    .get('/search/:key', requireLogin(true), (req, res, next) => {
        model.search(req.params.key)
        .then( result => {
            const data = { data: result.objects, total: result.total, isSuccess: true };
            res.send(data)
        }
        ).catch(next);
    })

    .get('/:id', requireLogin(true), (req, res, next) => {
        model.getById(req.params.id)
        .then( result => {
            const data = { data: result.object, total: result.total, isSuccess: true };
            res.send(data);
        }).catch(next)
    })

    .post('/', requireLogin(true), (req, res, next) => {
        model.add(req.body)
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data);
        }).catch(next)
    })

    .patch('/', requireLogin(true), (req, res, next) => {
        model.update(req.body)
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data)
        }).catch(next);
    })

    .delete('/:id', requireLogin(true), (req, res, next) => {
        model.remove(req.params.id)
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data)
        }).catch(next);
    })

    .post('/seed', requireLogin(true),  (req, res, next) => {
        model.seed()
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data)
        }).catch(next);
    })

    .post('/login', (req, res, next) => {
        model.login(req.body.email, req.body.password)
        .then( result => {
            const data = { data: result, isSuccess: true };
            res.send(data)
        }).catch(next);
    })

    // .post('/loginGoogle', (req, res, next) => {
    //     model.generateTokenAsync(req.body, '1d')
    //     .then( result => {
    //         const data = { data: result, isSuccess: true };
    //         res.send(data)
    //     }).catch(next);
    // })

    .post('/thirdpartylogin', (req, res, next) => {
        model.oAuthLogin(req.body.provider, req.body.accessToken)
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    })

module.exports = router;