const express = require('express');

const PlantController = require('../controllers/plantController');

const router = express.Router();


// router.get("/", 
//   (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html'))
// );

router.get('/',
  PlantController.getPlants, 
  (req, res) => res.status(200).json(res.locals.plants)
);

router.post('/newplant', 
  PlantController.createNewPlant, 
  (req, res) => res.status(200).json(res.locals.newPlant));

router.delete('/:id', PlantController.deletePlant,
(req, res) => res.sendStatus(200))

router.pat

module.exports = router;