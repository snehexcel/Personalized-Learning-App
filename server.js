require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB ✅"))
.catch((err) => console.log("MongoDB Connection Error ❌", err));

// Sample API Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
