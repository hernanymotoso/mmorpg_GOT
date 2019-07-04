/** Importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Entrou na funçao de connection');

    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', // String contendo o endereço do servidor 
            27017, // Porta de conexão
            {}
        ),
        {}   
    );

    return db;

};

module.exports = function(){
   return connMongoDB;
};