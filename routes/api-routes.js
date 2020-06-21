const router = require("express").Router();
const Workout = require("../models/workout.js.js.js.js.js");

router.get("/api/workouts",function(req,res){
    Workout.find(req), function(err,data){
        if (err){console.log(err)} 
        
       else res.json(data)
};
});

router.post("/api/workouts",function(req,res){
    Workout.create(req.body, function(err,data){
        if (err){console.log(err)
        console.log(data)
        } 
        
       else res.json(data);

    });


    router.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
          params.id,
          { $push: { exercises: body } },
          // "runValidators" will ensure new exercises meet our schema requirements
          { new: true, runValidators: true }
        )
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });



});