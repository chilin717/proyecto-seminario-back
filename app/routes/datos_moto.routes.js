module.exports =(app)=>{

    const datos_motos=require('../controllers/datos_moto.controllers.js');

    app.post('/datos_motos',datos_motos.create);
    app.get('/datos_motos',datos_motos.findAll);
    app.get('/datos_motos/:id',datos_motos.findOne);
    app.put('/datos_motos/:id',datos_motos.update);
    app.delete('/datos_motos/:id',datos_motos.delete);
}