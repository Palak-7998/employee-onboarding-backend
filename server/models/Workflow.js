const mongoose = require("mongoose");

const workflowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  steps: [
    {
      title: String,
      assignedTo: String,
      order: Number
    }
  ]
});

module.exports = mongoose.model("Workflow", workflowSchema);
