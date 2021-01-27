// const react = require('react')
// axios req to get /galler endpoint

// react dom reneder

// import axios from 'axios';
// const axios = require('axios')
// const doc = document.body;
const gallery = document.getElementById('gallery');
const calc = document.getElementById('calculator');

axios.get('http://localhost:3002')
  .then(({data}) => {
    const body = gallery.getElementsByTagName('body')
    // gallery.innerHTML = data
    // console.log($.parseHTML(data))
    // console.log($(data).getElementsByTagName('body'))
    // console.log(data)
    // console.log(data.getElementsByTagName('body'))
    // console.log('Axios request to localhost:3002 (GALLERY) successful')
    let openI = data.indexOf('<body>')
    let closeI = data.indexOf('</body>')
    // let slice = data.slice(openI + 7, ((closeI) - openI))
    let slice = data.slice(openI+7, closeI)
    // console.log(slice)
    let container = document.createElement('div');
    container.innerHTML = slice;

    // gallery.innerHTML = slice;
    // gallery.append(slice);
    gallery.append(container)
    // container.append(slice)
    console.log(typeof slice)
    console.log(typeof gallery)


  })

  axios.get('http://localhost:3001')
  .then(({data}) => {
    // calc.innerHTML = data

    // console.log('Axios request to localhost:3002 (GALLERY) successful')
  })


