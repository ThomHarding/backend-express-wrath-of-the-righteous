const { Router } = require('express');
const Companion = require('../models/Companion');

module.exports = Router()
  .get('/:id', async(req, res) => {
    console.log('hi');
    const id = req.params.id;
    const matchingCompanion = await Companion.getById(id);
    res.json(matchingCompanion[0]);
  })

  .get('/', async(req, res) => {
    console.log('hi');
    const companions = await Companion.getAll();
    res.json(companions);
  });
