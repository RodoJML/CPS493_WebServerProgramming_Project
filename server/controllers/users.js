const express = require('express');
const router = express.Router();
const model = require('../models/users');

router
.get('/', (req, res, next) => {
    model.getAll()
    .then( result => {
        const data = { data: result.users, total: result.total, isSuccess: true };
        // Returns data in the data envelope format
        res.send(data);
    })
    .catch(next);
})

.post('/seed', (req, res, next) => {
    model.seed()
    .then( result => {
        const data = { data: result, isSuccess: true };
        res.send(data);
    })
    .catch(next);
})

module.exports = router;