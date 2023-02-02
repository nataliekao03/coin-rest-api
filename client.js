const fetch = require('node-fetch');

fetch('http://localhost:5000/flip-coins?times=40')
    .then(res  => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    });