const express = require('express');
const stages = express.Router();
const { Stage } = require('../models');

// Index route
stages.get('/', async (req, res) => {
  try {
    const allStages = await Stage.findAll();
    res.json(allStages);
  } catch (e) {
    res.send(e.message);
  }
});

// Show route
stages.get('/:id', async (req, res) => {
  try {
    const specificStage = await Stage.findOne({
      where: { id: req.params.id }
    });
    res.json(specificStage);
  } catch (e) {
    res.send(e.message);
  }
});

// Create route
stages.post('/', async (req, res) => {
  try {
    const newStage = await Stage.create(req.body);
    res.json(newStage);
  } catch (e) {
    res.send(e.message);
  }
});

// Update route
stages.put('/:id', async (req, res) => {
  try {
    const [numUpdated] = await Stage.update(req.body, {
      where: { id: req.params.id }
    });
    res.send(`Updated ${numUpdated} stage(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

// Delete route
stages.delete('/:id', async (req, res) => {
  try {
    const deleted = await Stage.destroy({
      where: { id: req.params.id }
    });
    res.send(`Deleted ${deleted} stage(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = stages;