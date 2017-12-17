var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp'||'mongodb://esafif:safif3110@ds137826.mlab.com:37826/node-todo-api');

module.exports = {
    mongoose
};


//'mongodb://localhost:27017/TodoApp' || 