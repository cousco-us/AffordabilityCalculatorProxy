const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.get('/', (req, res) => {
  res.send('Hello Proxy!')
  // res.status(400).send('bad kitty')
})

app.get('/ex', (req, res) => {
  res.redirect(301, 'http://example.com')
})

app.get('/simple_calc', (req, res) => {
  res.redirect(301, 'http://localhost:3001')
})

app.get('/calc', (req, res) => {
  axios.get('http://localhost:3001')
    .then(({data}) => {
      res.status(200).send(data)
      console.log('Axios request to localhost:3001 successful')
    })
    .catch(err => res.status(400).send('Axios request to localhost:3001 UNsuccessful'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})