const db = require("../models");
require("mongoose");

module.exports = (app) => {
  // Start new workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        console.log("error", err);
        res.json(err);
      });
  });
};
