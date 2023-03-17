const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/answer', (req, res) => {
  res.sendFile(__dirname + '/public/index-answer.html')
})

app.get('/photo-book2', (req, res) => {
  res.sendFile(__dirname + '/public/photo-book2.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
