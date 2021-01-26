const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello Proxy!')

  // axios req to get bens service
    // parse out body from html

  // axios req to get jasons service
    // parse out body from html

  // axios req to get nicks service
    // parse out body from html

  // build new consolidated body html
  // send consolidated html as resp

})

app.get('/ex', (req, res) => {
  res.redirect(301, 'http://example.com')
})

app.get('/simple_calc', (req, res) => {
  res.redirect(301, 'http://localhost:3001')
})

app.get('/gallery', (req, res) => {
  axios.get('http://localhost:3002')
    .then(({data}) => {
      res.status(200).send(data)
      console.log('Axios request to localhost:3002 (GALLERY) successful')
    })
    .catch(err => res.status(400).send('Axios request to localhost:3002 (GALLERY) UNsuccessful'))
})

app.get('/calc', (req, res) => {
  axios.get('http://localhost:3001')
    .then(({data}) => {
      res.status(200).send(data)
      console.log('Axios request to localhost:3001 (CALC) successful')
    })
    .catch(err => res.status(400).send('Axios request to localhost:3001 (CALC) UNsuccessful'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})