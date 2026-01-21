const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  assignedTo: {
    type: String,   // HR, IT, Manager
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending"
  },

  // 👇 THIS IS IMPORTANT (Workflow link)
  workflowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workflow",
    required: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);
