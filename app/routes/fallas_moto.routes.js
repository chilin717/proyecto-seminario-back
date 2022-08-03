module.exports =(app)=>{

    const fallas_motor=require('../controllers/fallas_motor.controllers.js');

    app.post('/fallas_motor',fallas_motor.create);
    app.get('/fallas_motor',fallas_motor.findAll);
    app.get('/fallas_motor/:id',fallas_motor.findOne);
    app.put('/fallas_motor/:id',fallas_motor.update);
    app.delete('/fallas_motor/:id',fallas_motor.delete);
}