const { request, response } = require('express');
const express  = require('express'); 
const app = express();

// console.log(app);

app.get('/projects', (request, response) => {
    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
});

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params);
    
    return response.json([
        'Projeto 500',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 500',
        'Projeto 2'
    ]);
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
})