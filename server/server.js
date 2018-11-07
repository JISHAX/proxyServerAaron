const express = require('express');
const path = require('path');

const app = express();

app.use('/restaurants/:id', express.static(path.join(__dirname, '../public/')));

app.listen(3000);
