const Motor_completo = require('../models/motor_completo.model.js');


exports.create=(req,res)=>{
    console.log("Crear");
    console.log(req.body);
    const motor_completo = new Motor_completo(req.body);
    motor_completo.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Motor_completo.find().then(motor_completos=>{
        res.status(200).send(motor_completos);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrio algo incorrecto"
        });
    });
    console.log("Listando");
};

exports.findOne=(req,res)=>{
    Motor_completo.findById(req.params.id).then(motor_completo=>{
        if(!motor_completo){
            return res.status(400).send({
                message:"Motor completo no encontrado"
            });
        }
        res.status(200).send(motor_completo);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Motor completo no encontrado"
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
            message:"Los datos del Motor completo no pueden estar vacios"
        });
    }
    Motor_completo.findByIdAndUpdate(req.params.id,{
        id:req.body.id || 0,
        biela:req.body.biela ,
        marca_biela:req.body.marca_biela,
        bailneras_ciguenal:req.body.bailneras_ciguenal,
        marca_balineras_cigueñal:req.body.marca_balineras_cigueñal,
        balineras_motor:req.body.balineras_motor,
        marca_balineras_motor:req.body.marca_balineras_motor,
        discos_closh:req.body.discos_closh,
        marca_discos_closh:req.body.marca_discos_closh,
        balancines:req.body.marca_balancines,
        cilindro:req.body.cilindro,
        marca_cilindro:req.body.marca_cilindro,
        retenes:req.body.retenes,
        marca_retenes:req.body.marca_retenes,
        valvulas:req.body.valvulas,
        marca_valvulas:req.body.marca_valvulas,
        guias_cadenilla:req.body.guias_cadenilla,
        marca_guias_cadenilla:req.body.marca_guias_cadenilla,
        cadenilla:req.body.cadenilla,
        marca_cadenilla:req.body.marca_cadenilla,
        empaques:req.body.empaques,
        marca_empaques:req.body.marca_empaques,
        observacion: req.body.observacion || null
    },{new:true}).then(motor_completo=>{
        if(!motor_completo){
            return res.status(404).send({
                message:"Motor completo no encontrado"
            });
        }
        res.status(200).send(motor_completo);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Motor completo no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
};

exports.delete=(req,res)=>{
    Motor_completo.findByIdAndRemove(req.params.id).then(motor_completo=>{
        if(!motor_completo){
            return res.status(404).send({
                message:"Motor completo no encontrado"
            });
        }
        res.status(200).send({
            message:"Motor completo eliminado con exito"
        }).catch(err=>{
            if(err.kind==='ObjectId' || err.name==='NotFound'){
                return res.sttus(404).send({
                    message:" Motor completo no encontrado"
                });
            }
            return res.status(500).send({
                message:"Ocurrio un error en el registro"
            })
        })
    });
};