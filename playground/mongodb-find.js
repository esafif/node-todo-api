//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log("Is not Connected");
    }
    console.log("Database is connected");

    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log("Unable to Fetch todos");
    })

    //db.close();
});