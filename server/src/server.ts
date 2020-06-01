import express from 'express';


const app = express();

app.get('/users', (request, response)=> {
    console.log('listagem de usuario');

    response.json([
        'Jilcimar',
        'Diego',
        'João'
    ]);
});
app.listen(3333);