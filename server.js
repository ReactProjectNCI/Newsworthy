// inspired by Ajay Singh https://medium.com/zestgeek/deploy-reactjs-progressive-webapp-on-heroku-abb809369d5
// to assist with building Express server to launch the application in Heroku

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  return res.send('ping');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); 
});
app.listen(port);