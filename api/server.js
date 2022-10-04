require('dotenv').config();
require('rootpath')();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const errorHandler = require('middlewares/errorHandler');

const corsOptions = {
  origin: ['*'],
  optionsSuccessStatus: 200,
  methods: ["GET"]
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(errorHandler);

const moviesRoutes = require('routes/movies.route.js');
app.use('/api', moviesRoutes);

// 404
app.get('*', (req, res) => {
  res.status(404).send({
    statusCode: 404,
    statusMessage: `The route doesn't exist!`
  });
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
