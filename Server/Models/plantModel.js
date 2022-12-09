const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://kolashah:plantpassword@cluster0.h35s0uw.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'plants',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema


const plantSchema = new Schema({
  name: { type: String, required: true },
  room: { type: String, required: true },
  daysSinceWater: { type: Number, required: true },
});

const Plants = mongoose.model('Plants', plantSchema)

module.exports = Plants;



