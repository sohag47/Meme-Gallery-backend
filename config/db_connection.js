const mongoose = require('mongoose');
const { db_url } = require('./config');

const ConnectDB = async () =>{
    try{
        await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Database is Connected!");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}
module.exports = ConnectDB;