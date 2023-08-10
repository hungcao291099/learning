const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.set('strictQuery', false).connect('mongodb://127.0.0.1:27017/learning', {});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }

}
module.exports =  {connect};