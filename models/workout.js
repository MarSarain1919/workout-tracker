const { Schema } = require("mongoose");

const workoutSchema = new Schema({
    day: {type: Date, default: () => new Date},
    exercises: [{
        type: {type: String, required:"Must choose type"},
        name: {type: String, required:"Must choose a name"},
        duration: {type: Number, required:"Must choose workout duration"},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number}
    }]
})