/** 1° Importar as configurações do servidor */
var app = require('./config/server');

/** 2° Parametrizar a porta de escuta */
app.listen(80, function(){
    console.log('Servidor online')
});