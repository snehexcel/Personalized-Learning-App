const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    difficultyLevel: String, // Beginner, Intermediate, Advanced
    progress: Object
});

module.exports = mongoose.model("User", UserSchema);
