//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log("Is not Connected");
    }
    console.log("Database is connected");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert to do', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('users').insertOne({
    //     name: 'safif',
    //     age: 22,
    //     location: 'Bandung'
    // }, (err, result) =>{
    //     if(err){
    //         return console.log("Not inserted users ", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});