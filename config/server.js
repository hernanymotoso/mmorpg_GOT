/** Importar o modulo do framework express */
var express = require('express');

/**  Importar o modulo do consign */
var consign = require('consign');

/** Importar o modulo do body-parser */
var bodyParser = require('body-parser');

/** Importar o modulo do express-validator */
var expressValidator = require('express-validator');

/** Importar o modulo do express-session */
var expressSession = require('express-session');

/** Iniciar o objeto express */
var app = express();

/** Setar as variaveis 'view engine' e 'views' do express (passar o ejs e o caminho das view) */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/** Configurar o middleware express.static */
app.use(express.static('./app/public'));

/** Configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/** Configurar o middleware express-validator */
app.use(expressValidator());

/** Configurar o moddleware express-session */
app.use(expressSession({
    secret: 'sakjgfsakdfasdfjh',
    resave: false,
    saveUninitialized: false
}));


/** Configurar o consign (Ele efetua os autoloads) */
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);


/** Exportar o objeto app */
module.exports = app; 