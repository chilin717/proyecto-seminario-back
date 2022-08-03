module.exports =(app)=>{

    const mantenimiento_completos=require('../controllers/mantenimiento_completo.controllers.js');

    app.post('/mantenimiento_completos',mantenimiento_completos.create);
    app.get('/mantenimiento_completos',mantenimiento_completos.findAll);
    app.get('/mantenimiento_completos/:id',mantenimiento_completos.findOne);
    app.put('/mantenimiento_completos/:id',mantenimiento_completos.update);
    app.delete('/mantenimiento_completos/:id',mantenimiento_completos.delete);
}