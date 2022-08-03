const Mantenimiento_Preventivo = require('../models/mantenimiento_preventivo.model.js');


exports.create=(req,res)=>{
    console.log("Crear");
    console.log(req.body);
    const mantenimiento_preventivo = new Mantenimiento_Preventivo(req.body);
    mantenimiento_preventivo.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Mantenimiento_Preventivo.find().then(mantenimiento_preventivos=>{
        res.status(200).send(mantenimiento_preventivos);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrio algo incorrecto"
        });
    });
    console.log("Listando");
};

exports.findOne=(req,res)=>{
    Mantenimiento_Preventivo.findById(req.params.id).then(mantenimiento_preventivo=>{
        if(!mantenimiento_preventivo){
            return res.status(400).send({
                message:"Mantenimiento preventivo no encontrado"
            });
        }
        res.status(200).send(mantenimiento_preventivo);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Mantenimiento preventivo no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
    console.log("Listando por ID");
};

exports.update=(req,res)=>{
    if(Object.keys(req.body).length===0){
        return res.status(400).send({
            message:"Los datos del Mantenimiento preventivo no pueden estar vacios"
        });
    }
    Mantenimiento_Preventivo.findByIdAndUpdate(req.params.id,{
        id:req.body.id || 0,
        cambio_aceite:req.body.cambio_aceite ,
        marca_aceite:req.body.marca_aceite,
        kilometraje:req.body.kilometraje,
        filtro_aceite:req.body.filtro_aceite,
        original_filtro_aceite:req.body.original_filtro_aceite,
        filtro_aire:req.body.filtro_aire,
        original_filtro_aire:req.body.original_filtro_aire,    
        liquido_freno_del:req.body.liquido_freno_del,
        marca_liquido_freno_del:req.body.marca_liquido_freno_del,
        pastillas_bandas_del:req.body.pastillas_bandas_del,
        marca_pastillas_bandas_del:req.body.marca_pastillas_bandas_del,
        balineras_del:req.body.balineras_del,
        marca_balineras_del:req.body.marca_balineras_del,        
        pastillas_bandas_tras:req.body.pastillas_bandas_tras,
        marca_pastillas_bandas_tras:req.body.marca_pastillas_bandas_tras,
        balineras_tras:req.body.balineras_tras,
        marca_balineras_tras:req.body.marca_balineras_tras,
        liquido_freno_tras:req.body.liquido_freno_tras,
        marca_liquido_freno_tras:req.body.marca_liquido_freno_tras,
        lubricacion_guayas:req.body. lubricacion_guayas,
        calibracion:req.body.calibracion,
        valvulas:req.body.valvulas,
        carburador:req.body.carburador,       
        observacion: req.body.observacion || null
    },{new:true}).then(mantenimiento_preventivo=>{
        if(!mantenimiento_preventivo){
            return res.status(404).send({
                message:"Mantenimiento completo no encontrado"
            });
        }
        res.status(200).send(mantenimiento_preventivo);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Mantenimiento preventivo no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
};

exports.delete=(req,res)=>{
    Mantenimiento_Preventivo.findByIdAndRemove(req.params.id).then(mantenimiento_preventivo=>{
        if(!mantenimiento_preventivo){
            return res.status(404).send({
                message:"Mantenimiento preventivo no encontrado"
            });
        }
        res.status(200).send({
            message:"Mantenimiento preventivo eliminado con exito"
        }).catch(err=>{
            if(err.kind==='ObjectId' || err.name==='NotFound'){
                return res.sttus(404).send({
                    message:" Mantenimiento preventivo no encontrado"
                });
            }
            return res.status(500).send({
                message:"Ocurrio un error en el registro"
            })
        })
    });
};