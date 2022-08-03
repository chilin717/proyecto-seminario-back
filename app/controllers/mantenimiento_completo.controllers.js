const Mantenimiento_Completo = require('../models/mantenimiento_completo.model.js');


exports.create=(req,res)=>{
    console.log("Crear");
    console.log(req.body);
    const mantenimiento_completo = new Mantenimiento_Completo(req.body);
    mantenimiento_completo.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Mantenimiento_Completo.find().then(mantenimiento_completos=>{
        res.status(200).send(mantenimiento_completos);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrio algo incorrecto"
        });
    });
    console.log("Listando");
};

exports.findOne=(req,res)=>{
    Mantenimiento_Completo.findById(req.params.id).then(mantenimiento_completo=>{
        if(!mantenimiento_completo){
            return res.status(400).send({
                message:"Mantenimiento completo no encontrado"
            });
        }
        res.status(200).send(mantenimiento_completo);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Mantenimiento completo no encontrado"
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
            message:"Los datos del Mantenimiento completo no pueden estar vacios"
        });
    }
    Mantenimiento_Completo.findByIdAndUpdate(req.params.id,{
        id:req.body.id || 0,
        cambio_aceite:req.body.cambio_aceite ,
        marca_aceite:req.body.marca_aceite,
        kilometraje:req.body.kilometraje,
        filtro_aceite:req.body.filtro_aceite,
        original_filtro_aceite:req.body.original_filtro_aceite,
        filtro_aire:req.body.filtro_aire,
        original_filtro_aire:req.body.original_filtro_aire,
        aceite_suspencion:req.body.aceite_suspencion,
        marca_aceite_suspencion:req.body.marca_aceite_suspencion,
        cunas:req.body.cunas,
        marca_cunas:req.body.marca_cunas,
        liquido_freno_del:req.body.liquido_freno_del,
        marca_liquido_freno_del:req.body.marca_liquido_freno_del,
        pastillas_bandas_del:req.body.pastillas_bandas_del,
        marca_pastillas_bandas_del:req.body.marca_pastillas_bandas_del,
        balineras_del:req.body.balineras_del,
        marca_balineras_del:req.body.marca_balineras_del,
        bujes_tijera:req.body.bujes_tijera,
        marca_bujes_tijera:req.body.marca_bujes_tijera,
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
        correa:req.body.correa,
        marca_correa:req.body.maarca_correa,
        roles:req.body.roles,
        marca_roles:req.body.marca_roles,
        engrase_automaticos:req.body.engrase_automaticos,
        observacion: req.body.observacion || null
    },{new:true}).then(mantenimiento_completo=>{
        if(!mantenimiento_completo){
            return res.status(404).send({
                message:"Mantenimiento completo no encontrado"
            });
        }
        res.status(200).send(mantenimiento_completo);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Mantenimiento completo no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
};

exports.delete=(req,res)=>{
    Mantenimiento_Completo.findByIdAndRemove(req.params.id).then(mantenimiento_completo=>{
        if(!mantenimiento_completo){
            return res.status(404).send({
                message:"Mantenimiento completo no encontrado"
            });
        }
        res.status(200).send({
            message:"Mantenimiento completo eliminado con exito"
        }).catch(err=>{
            if(err.kind==='ObjectId' || err.name==='NotFound'){
                return res.sttus(404).send({
                    message:" Mantenimiento completo no encontrado"
                });
            }
            return res.status(500).send({
                message:"Ocurrio un error en el registro"
            })
        })
    });
};