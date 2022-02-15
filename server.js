const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here

/* app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});*/

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/database.json'));
});
/*
app.get('/.replit', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/mimic1.txt'));
});
app.get('/bot.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/bot.js'));
});
app.get('/bot2.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/bot2.js'));
});
app.get('/package.json', function(req, res) {
  res.sendFile(path.join(__dirname, '/package.json'));
});
app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/style.css'));
})
app.get('/updates', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/updates.html'));
})
app.get('/files', function(req, res){
  res.sendFile(path.join(__dirname, '/public/files.html'));
})
app.get('/server.js', function(req, res) {
res.sendFile(path.join(__dirname, '/server.js'));
})
app.get('/alpha', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/alphabet.json'));
});
*/
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/public/404.html'));
});

function keepAlive(){
app.listen(port, ()=>{console.log("Server is Ready!")});
}
 
module.exports = keepAlive;