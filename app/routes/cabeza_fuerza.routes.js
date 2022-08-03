module.exports =(app)=>{

    const cabezas_fuerza=require('../controllers/cabeza_fuerza.controllers.js');

    app.post('/cabezas_fuerza',cabezas_fuerza.create);
    app.get('/cabezas_fuerza',cabezas_fuerza.findAll);
    app.get('/cabezas_fuerza/:id',cabezas_fuerza.findOne);
    app.put('/cabezas_fuerza/:id',cabezas_fuerza.update);
    app.delete('/cabezas_fuerza/:id',cabezas_fuerza.delete);
}