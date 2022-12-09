const e = require('express');
const { Next } = require('react-bootstrap/PageItem');
const Plants = require('../models/plantModel');
const Plant = require('../models/plantModel');

const PlantController = {};

PlantController.getPlants = async (req, res, next) => {
  try {
    res.locals.plants = await Plant.find({}).exec();
    const { plants } = res.locals;
    plants.sort((a, b) => (a.daysSinceWater < b.daysSinceWater ? 1 : -1));
    return next();
  } catch (err) {
    return next({
      log: 'An error occured in getPlants middleware',
      status: err.status || 500,
      message: { err: 'An error occurred' },
    });
  }
};

PlantController.createNewPlant = (req, res, next) => {
  const { name, room, watered: daysSinceWater } = req.body;
  Plant.create({ name, room, daysSinceWater })
    .then((data) => {
      res.locals.newPlant = data;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Express error handler caught in createNewPlant middleware',
        status: err.status || 500,
        message: { err: 'An error occurred' },
      })
    );
};

PlantController.deletePlant = (req, res, next) => {
  const { id } = req.params;
  Plants.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.log(err);
      return next();
    } else {
      console.log('Deleted: ', docs);
      return next();
    }
  });
};

PlantController.updatePlant = (req, res, next) => {};

module.exports = PlantController;
