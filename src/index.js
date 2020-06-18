require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const uuid = require('uuid/dist/v4');
const bodyParser = require('body-parser');
const path = require('path');

const apiRouter = require('./routes/api.routes');

const app = express();

// Database
require('./database/database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, uuid.default() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).array('images', 5));

// Routes
app.use('/api', apiRouter)

app.listen(app.get('port'), () =>{
    console.log(`Server online on port ${app.get('port')}`);
})
