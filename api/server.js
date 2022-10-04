require('dotenv').config();
require('rootpath')();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

const corsOptions = {
  origin: ['*'],
  optionsSuccessStatus: 200,
  methods: ["GET"]
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.listen(port, () => console.log(`Server listening on port: ${port}`));
