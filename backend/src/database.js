const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/taskapp';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log('Database is connected');
});

