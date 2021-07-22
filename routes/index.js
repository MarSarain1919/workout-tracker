const router = require('express').Router();

// get exercises

router.get("/exercise", async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
})

// get stats

router.get("/stats", async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})

// get workouts

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(workoutTrackerDb => {res.json(workoutTrackerDb);})
        .catch(err => {res.status(400).json(err);});
    });

// post workouts

router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
        .then(workoutTrackerDb => {res.json(workoutTrackerDb);})
        .catch(err => {res.status(400).json(err);});
    });

// update workout

// get workout range


module.exports = router;