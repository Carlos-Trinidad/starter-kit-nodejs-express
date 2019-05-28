'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('./middlewares/cors');
const morgan = require('morgan');
//const fileUpload = require('express-fileupload');
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(morgan('dev'));
//app.use(fileUpload());
//app.use(express.static(__dirname + "/public")); // load UI from public folder

app.use('/api', routes);


/* app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname+'/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
    res.send('File uploaded!');
  });
}); */
module.exports = app;