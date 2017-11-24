var express = require('express')
var app = express()

// Definição de request e response da root
app.get('/', function (request, response) {
  response.send('Vocês estão prontas crianças?')
})


// Disparando porta que o app ficara "listening" huehue
app.listen(8085, function () {
  console.log('Estamos na porta 8085, capitão!')
})