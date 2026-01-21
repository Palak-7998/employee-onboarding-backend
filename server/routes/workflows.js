const express = require("express");
const router = express.Router();
const Workflow = require("../models/Workflow");

// CREATE workflow (admin defines onboarding steps)
router.post("/", async (req, res) => {
  try {
    const workflow = new Workflow(req.body);
    await workflow.save();
    res.status(201).json(workflow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all workflows
router.get("/", async (req, res) => {
  try {
    const workflows = await Workflow.find();
    res.json(workflows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
