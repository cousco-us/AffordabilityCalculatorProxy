const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors')

const port = 3000
const app = express()
app.use('/', express.static('public'));
app.use(cors());

// Gallery
app.use('/api/photoGallery', createProxyMiddleware({ target: 'http://ec2-13-52-97-136.us-west-1.compute.amazonaws.com:3002/', changeOrigin: true }));

// Carousel
app.use('/api/listings', createProxyMiddleware({ target: 'http://ec2-3-129-216-135.us-east-2.compute.amazonaws.com:3003/', changeOrigin: true }));

// Calculator
app.use('/houses', createProxyMiddleware({ target: 'http://ec2-52-35-16-109.us-west-2.compute.amazonaws.com:3001/', changeOrigin: true }));
app.use('/loans', createProxyMiddleware({ target: 'http://ec2-52-35-16-109.us-west-2.compute.amazonaws.com:3001/', changeOrigin: true }));
app.use('/taxes', createProxyMiddleware({ target: 'http://ec2-52-35-16-109.us-west-2.compute.amazonaws.com:3001/', changeOrigin: true }));


app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})
