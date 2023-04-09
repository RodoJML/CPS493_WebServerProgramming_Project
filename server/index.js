// Module imports 
const express = require('express');
const path = require('path');

// Controller imports 
const food = require('./controllers/food');
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
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        next()
    })

// Actions s
app
    .get('/api/v1/', (req, res) => { res.send('Hello World! From Express') })
    .use('/api/v1/food', food)

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
