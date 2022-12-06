const path = require('path');
const express = require('express')
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');


const PlantController = require('./controllers/plantController')


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
});

app.post('/newplant', PlantController.createNewPlant, (req, res) => {
  return res.send('works')
});


app.use((req, res) => res.sendStatus(404));


// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


// module.exports = app;