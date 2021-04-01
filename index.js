const { request, response } = require('express');
const express  = require('express'); 
const {v4:uuidv4} = require('uuid');

const app = express();

app.use(express.json());

const projects = [];

// console.log(app);

app.get('/projects', (request, response) => {
    //const {title, owner} = request.query;

   // console.log(title);
   // console.log(owner);

    return response.json(projects);
});

app.post('/projects', (request, response) => {
    const {title, owner} = request.body

    const project = { id: uuidv4(), title, owner};

    projects.push(project); // esse push vai jogar a criação do nosso projeto

    return response.json(project); // sempre retorna o projeto recém criado
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const { title, owner } = request.body

    const projectIndex = projects.findIndex(project => project.id === id)
    
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Projeto não foi encontrado'});
    }
    
    const project ={
        id,
        title,
        owner
    }

    projects[projectIndex] = project;

    //console.log(params);
    
    return response.json(project);

});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params

    const projectIndex = projects.findIndex(project => project.id === id)
    
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Projeto não foi encontrado'});
    }
    
    
    projects.splice(projectIndex, 1)

    return response.status(204).send()
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
})