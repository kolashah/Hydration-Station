const path = require('path');
const express = require('express');
const cors = require('cors')

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()) 
// * handle requests for static files
app.use(express.static(path.resolve(__dirname, '../public/index.html')));

// app.get("/", function (req, res) {
//   res.sendFile(path.resolve(__dirname, '../dist/index.html'))
// });
app.use('/api', apiRouter);

// app.post('/newplant', PlantController.createNewPlant, (req, res) => {
//   return res.status(200).json(res.locals.newPlant)
// });

app.use('*', (req, res) => {
  return res.status(404).send("This is not the page you're looking for...");
});

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

module.exports = app;
