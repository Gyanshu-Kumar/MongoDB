const { error } = require('console');
const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');
const studentModel = require('./models/student.model1');


// write the code to connect with mongodb
mongoose.connect("mongodb://localhost/be_demodb") //be_demodb is the name of the database

const db = mongoose.connection; //creating a connection

db.on("error", () => { //if there is an error in connecting to the database
    console.log("Error in connecting to the database")
});
db.once("open", () => { //if the connection is successful
    console.log("Connected to the database")
    //logic to insert the data
    init();

    //Running the quaries on mongodb
    dbQuaries();
});

//CREATE 
async function init(){
    // Logic to insert the data
    const student = {
        name: "John",
        age: 25, 
        email : "gyanshusingh152@gmail.com",
        subjects : ["English", "Math"],
    }
    //creating a new instance of the student model
    const st_obj = await studentModel.create(student)
    console.log(st_obj);
}

//READ
async function dbQuaries(){
    //Logic to student data
    console.log("inside the dbQuaries function")
    //Read the student data based upon id
    try{
        const student = await studentModel.findById("66979b9c5c7673a5bb5551ac")
        console.log(student)
    }catch(error){
        console.log(error)
    }

    // i want to go and search based on name
    try{
    const students = await studentModel.find({name:"john"})
    console.log(students)
    }catch(error){
        console.log(error)
    }
    // i want to go and search based on email
    try{
        const students = await studentModel.find({email:"gyanshusingh152@gmail.com"})
        console.log(students)
        }catch(error){
            console.log(error)
        }
  // deal with multiple conditions
  const students = await studentModel.where('age').gt("10").where('name').equals('john').limit(1)
  console.log(students)


  //Delete
const student = await studentModel.deleteOne({email:"gyanshusingh152@gmail.com"})
console.log(student)

//Update
const student1 = await studentModel.updateOne({name:"John"}, {name:"johnny"})
console.log(student1)
}

