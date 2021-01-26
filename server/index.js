const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Proxy!')
  // res.status(400).send('bad kitty')
})

app.get('/ex', (req, res) => {
  res.redirect(301, 'http://example.com')
})

app.get('/calc', (req, res) => {
  res.redirect(301, 'http://localhost:3001')

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})