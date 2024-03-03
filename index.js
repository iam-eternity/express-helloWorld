const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Chai aur Twitter')
})
app.get('/youtube', (req, res) => {
  res.send(`<h2>The name is youtube</h2>`)
})
app.get('/login', (req, res) => {
  res.send(`<h1> Please Login </h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})