module.exports =(app)=>{

    const motor_completos=require('../controllers/motor_completo.controllers.js');

    app.post('/motor_completos',motor_completos.create);
    app.get('/motor_completos',motor_completos.findAll);
    app.get('/motor_completos/:id',motor_completos.findOne);
    app.put('/motor_completos/:id',motor_completos.update);
    app.delete('/motor_completos/:id',motor_completos.delete);
}