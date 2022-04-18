
require('dotenv').config();

//codigo de servidor

const express = require('express');
const morgan = require('morgan');
const multer= require('multer');
const path= require('path');

//initializations
const app = express();

require('./database');
console.log(process.env.NODE_ENV)

//settings
app.set('port', process.env.PORT || 19001);

//middlewares
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas

app.use('/api/fadiapp', require('./rutas/fadiapp'));

//static files

app.use(express.static(path.join(__dirname, 'public')));

//start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));

})