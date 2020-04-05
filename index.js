const path = require('path')
const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/storybook-static/'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'))
})
