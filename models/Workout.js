const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
  day:{
type: Date,
default: new Date().setDate( new Date().getDate())



  },
  
    exercises: [{
      
    name: { 
    type: String
},
    
workoutType: { 
    type: String
},
    
weight: { 
    type: Number
},
    
sets: { 
    type: Number
},
    
reps: { 
    type: Number
},
    
duration: { 
    type: Number
},
    
distance: { 
    type: Number
},




}]

  
  

    
    
      

  });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;