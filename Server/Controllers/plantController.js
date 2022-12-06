const Plant = require('../Models/plantModel')

const PlantController = {}

PlantController.createNewPlant = (req, res, next) => {
  console.log('it works')
  return next()
}


module.exports = PlantController;