// Module imports 
require('dotenv').config();
const express = require('express');
const path = require('path');

// Controller imports 
const food = require('./controllers/food');
const users = require('./controllers/users');
const stats = require('./controllers/stats');
const restaurants = require('./controllers/restaurants');
const { requireLogin, parseAuthorizationHeader } = require('./middleware/authorization');
const app = express();

// Socket 
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Middleware 
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        if (req.method === 'OPTIONS') {
            // Make sure OPTIONS request are always allowed
            // That way pre-flight requests don't fail
            return res.status(200).send({});
        }
        next()
    })
    .use(parseAuthorizationHeader)

// Actions s
app
    .get('/api/v1/', (req, res) => { res.send('Hello World! From Express') })
    .use('/api/v1/food', requireLogin(), food)
    .use('/api/v1/stats', requireLogin(), stats)
    .use('/api/v1/restaurants', requireLogin(), restaurants)
    .use('/api/v1/users', users),
    
// Catch all
app
    .get('*', (req, res) => { res.sendFile(path.join(__dirname, '../client/dist/index.html')) })

// Error handling
app
    .use((err, req, res, next) => {
        console.error(err)
        const msg = {
            status: err.status || 500,
            error: err.message || 'Internal Server Error',
            isSuccess: false
        }
        res.status(msg.status).json(msg)
    })

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`))
