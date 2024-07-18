const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        min: 19,
        required: true
    }, 
    email : {
        type: String,
        required: true,
        lowercase: true,
        minlength: 5,
    }, 
    subjects : [String],
    createdAt : {
        type: Date,
        immutable : true,
        default : () => {
            return Date.now();
        }
    }
    
},{versionKey: false, timestamps: true}); //This will remove the version field and timestamps will add time

module.exports = mongoose.model('Student', studentSchema); //Student is the name of the collection and storing the collection in studentSchema