var mongodb = require('mongodb');
var db = null;

mongodb.MongoClient.connect('mongodb://localhost:27017/rna', function(err, database) {
    if(err)
        throw err;

    db = database;
});

function Functional(){
    this.__defineGetter__('collection', function(){
        return db.collection.bind(db);
    });

    this.__defineGetter__('ObjectID', function(){
        return mongodb.ObjectID.bind(mongodb);
    });
}

module.exports = new Functional();
