// Define the schema for the student model connection to store in the database

const mongoose = require('mongoose');


//Schema is a blueprint of the database which tells the database what to store
const studentSchema = new mongoose.Schema({
        name: String,
        age : Number,

});

// Go ahead and create corroesponding collection in DB
module.exports = mongoose.model('Student', studentSchema); //Student is the name of the collection and storing the collection in studentSchema
// module.exports is used to export the model to be used in other files