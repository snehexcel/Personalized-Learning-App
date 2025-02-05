const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Fetch lessons based on difficulty level
router.get("/lessons/:level", async (req, res) => {
    const { level } = req.params;
    const lessons = {
        Beginner: ["Basic Alphabets", "Phonics Practice"],
        Intermediate: ["Word Recognition", "Simple Sentences"],
        Advanced: ["Comprehension", "Grammar Exercises"]
    };
    res.json({ lessons: lessons[level] || [] });
});

// Update user progress
router.post("/progress", async (req, res) => {
    const { email, progress } = req.body;
    await User.findOneAndUpdate({ email }, { progress }, { new: true });
    res.json({ message: "Progress Updated" });
});

module.exports = router;
