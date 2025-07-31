const express = require('express')
const app = express()
const port = 3000

app.get('/signup', (req, res) => {
  res.send('Hello from signup')
})

app.get('/signin', (req, res) => {
  res.json("Hello from sign-in")
})

app.get('/questions', (req, res) => {
    res.send('Hello from questions')
})

app.get('/submissions', (req, res) => {
    res.send("Hello from submissions")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
