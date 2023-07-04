fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));

//console.log(fetch = require('node-fetch'));