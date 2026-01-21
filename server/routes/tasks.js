const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const Notification = require("../models/Notification");


// Create task
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    // 🔔 Create notification for pending task
    await Notification.create({
      message: `New task assigned: ${task.title}`,
      taskId: task._id
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find().populate("assignedTo");
  res.json(tasks);
});

module.exports = router;
