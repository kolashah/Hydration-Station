const mongoose = require('mongoose');
const Schema = mongoose.Schema

// mongoose.connect('mongodb://localhost:27017/plantsDB');

const plantSchema = new Schema({
  name: {type: String, required: true},
  room: {type: String, required: true}
})


module.exports = mongoose.model('Plant', plantSchema)

// const Plant = mongoose.model('plant', plantSchema)

// const plant = new Plant({
//   name: "Chinese Money Tree",
//   room: "Study"
// });

// plant.save()


