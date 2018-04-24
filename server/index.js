const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3010;

massive(process.env.connection_string).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
});

app.post('/api/bin/:id', ctrl.create);
app.get('/api/bins/:id', ctrl.readBins);
app.get('/api/bin/:id', ctrl.readBin);
app.put('/api/bin/:id', ctrl.update);
app.delete('/api/bin/:id', ctrl.delete);
