const express = require('express');
const events = express.Router();
const { Event } = require('../models');

// Index route - Order data by ascending date
events.get('/', async (req, res) => {
  try {
    const allEvents = await Event.findAll({
      order: [['date', 'ASC']]
    });
    res.json(allEvents);
  } catch (e) {
    res.send(e.message);
  }
});

// Show route
events.get('/:id', async (req, res) => {
  try {
    const specificEvent = await Event.findOne({
      where: { id: req.params.id }
    });
    res.json(specificEvent);
  } catch (e) {
    res.send(e.message);
  }
});

// Create route
events.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.json(newEvent);
  } catch (e) {
    res.send(e.message);
  }
});

// Update route
events.put('/:id', async (req, res) => {
  try {
    const [numUpdated] = await Event.update(req.body, {
      where: { id: req.params.id }
    });
    res.send(`Updated ${numUpdated} event(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

// Delete route
events.delete('/:id', async (req, res) => {
  try {
    const deleted = await Event.destroy({
      where: { id: req.params.id }
    });
    res.send(`Deleted ${deleted} event(s).`);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = events