var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLenght: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner',
// });

// var otherTodo = new Todo({
//     // text: 'Feed the cat',
//     // completed: true,
//     // completedAt: 123
//     text: 'Cook dinner 22',
// })

// otherTodo.save().then((doc) =>{
//     console.log(JSON.stringify( doc, undefined, 2));
// }, (e) => {
//     console.log('unable to save data', e);
// });


//User
var User = mongoose.model('User', {
    Email: {
        type: String,
        required: true,
        trim: true,
        minLenght: 1
    }
});

var user = new User({
    Email: 'esafif637@gmail.com'
});

user.save().then((doc) =>{
    console.log('User saved ', doc);
}, (e) => {
    console.log('Unable to save user', e);
});