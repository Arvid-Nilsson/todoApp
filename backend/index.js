const express = require('express')
const app = express()

const path = "../todoapp/dist"
app.use(express.static(path));

app.get('/', function (req, res) {
  //res.send('Hello World')
  res.sendFile(path + "index.html");
})

app.listen(3000) 

console.log("running")
