module.exports =(app)=>{

    const mantenimiento_preventivos=require('../controllers/mantenimiento_preventivo.controllers.js');

    app.post('/mantenimiento_preventivos',mantenimiento_preventivos.create);
    app.get('/mantenimiento_preventivos',mantenimiento_preventivos.findAll);
    app.get('/mantenimiento_preventivos/:id',mantenimiento_preventivos.findOne);
    app.put('/mantenimiento_preventivos/:id',mantenimiento_preventivos.update);
    app.delete('/mantenimiento_preventivos/:id',mantenimiento_preventivos.delete);
}