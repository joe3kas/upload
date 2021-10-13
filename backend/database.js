const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jbocanegrac14:Admin2604@cluster0.di8hx.mongodb.net/demo?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));