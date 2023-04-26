const express = require('express');
const app = express();

const path = "../todoapp/dist";

let tasks = [{"id": 1, "message": "hej"}, {"id": 2, "message": "då"}];

app.use(express.static(path));

app.get('/', function (req, res) {
  //res.send('Hello World')
  res.sendFile(path + "index.html");
})

app.get('/api', function (req, res) {
  if(req.method == "GET"){
    res.json({"tasks": tasks});
  }
});

app.post('/api', function (req, res) {
  if(req.method == "POST"){
    console.log(typeof(req.body.tasks))
    res.sendStatus(200)
  }
});

app.listen(3000);

console.log("running");
