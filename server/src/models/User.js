const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 16,
        match:[ /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9,])/,
         "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character (excluding ',')."],
         trim: true
    },
    profilePricture: {
        type: String //profile picture URL
    },
    achievements: [{type: mongoose.Schema.Types.ObjectId, ref: "Achievement"}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    leaderboard: {type: mongoose.Schema.Types.ObjectId, ref: "LeaderBoard"},
    minigames: [{type: mongoose.Schema.Types.ObjectId, ref: "MiniGame"}],
    notifications: [{type: mongoose.Schema.Types.ObjectId, ref: "Notification"}],
    progress: {type: mongoose.Schema.Types.ObjectId, ref: "Progress"},
    quizzes: [{type: mongoose.Schema.Types.ObjectId, ref: "Quiz"}],
    submission: [{type: mongoose.Schema.Types.ObjectId, ref: "Submission"}],
    technique: [{type: mongoose.Schema.Types.ObjectId, ref: "Technique"}]
},{timestamps: true});


module.exports = mongoose.model('User', userSchema);

