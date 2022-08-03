const {Router} = require('express')
    const datos_clientes=require('../controllers/datos_cliente.controllers.js');
 
    const router = Router()


    
    router.get('/datos_clientes',datos_clientes.findAll);
    router.get('/datos_clientes/:id',datos_clientes.findOne);
    router.post('/datos_clientes',datos_clientes.create);
    router.put('/datos_clientes/:id',datos_clientes.update);
    router.delete('/datos_clientes/:id',datos_clientes.delete);

    module.exports = router