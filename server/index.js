const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')

const port = 3000
const app = express()
app.use('/', express.static('public'));
app.use(cors());

// Gallery
app.use('/api/photoGallery', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

// Carousel
app.use('/api/listings', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

// Calculator
app.use('/houses', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/loans', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/taxes', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
