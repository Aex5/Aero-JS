const express = require('express')
const app     = express()
const port    = 8080;

app.get('/', function (req, res){
  res.send('hello')
})

app.listen(port, function(){
  console.log('running on: ' + port)
})