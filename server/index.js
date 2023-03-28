const express = require('express');
const path = require('path');

const food = require('./data/food.json');

const hostname = '127.0.0.1';                       
const port = process.env.PORT || 3000;              

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));
