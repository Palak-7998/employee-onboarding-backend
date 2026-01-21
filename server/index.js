const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const workflowRoutes = require("./routes/workflows");
const notificationRoutes = require("./routes/notifications");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/workflows", workflowRoutes);
app.use("/api/notifications", notificationRoutes);


// test route
app.get("/", (req, res) => {
  res.send("Employee Onboarding Backend Running");
});

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/onboarding")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
