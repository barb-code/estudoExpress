const { request, response } = require('express');
const express  = require('express'); 
const app = express();

// console.log(app);
app.get('/',(request,response) => {
    response.send('Hello, world!');
})

app.listen(3000, () => {
    console.log('Servidor rodando!');
})