const Fallas_Moto = require('../models/fallas_moto.model.js');


exports.create=(req,res)=>{
    console.log("Crear");
    console.log(req.body);
    const fallas_moto = new Fallas_Moto(req.body);
    fallas_moto.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Fallas_Moto.find().then(fallas_motor=>{
        res.status(200).send(fallas_motor);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrio algo incorrecto"
        });
    });
    console.log("Listando");
};

exports.findOne=(req,res)=>{
    Fallas_Moto.findById(req.params.id).then(fallas_moto=>{
        if(!fallas_moto){
            return res.status(400).send({
                message:"Fallas Moto no encontrado"
            });
        }
        res.status(200).send(fallas_moto);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Fallas Moto no encontrado"
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
            message:"Los datos de Fallas Moto no pueden estar vacios"
        });
    }
    Fallas_Moto.findByIdAndUpdate(req.params.id,{
        id:req.body.id || 0,
        calibracion:req.body.calibracion ,
        valvulas:req.body.valvulas,
        carburador:req.body.carburador,        
        electrico:req.body.electrico,       
        observacion: req.body.observacion || null
    },{new:true}).then(fallas_moto=>{
        if(!fallas_moto){
            return res.status(404).send({
                message:"Fallas Moto no encontrado"
            });
        }
        res.status(200).send(fallas_moto);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Fallas Moto no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
};

exports.delete=(req,res)=>{
    Motor_completo.findByIdAndRemove(req.params.id).then(fallas_moto=>{
        if(!fallas_moto){
            return res.status(404).send({
                message:"Fallas Moto no encontrado"
            });
        }
        res.status(200).send({
            message:"Fallas Moto eliminado con exito"
        }).catch(err=>{
            if(err.kind==='ObjectId' || err.name==='NotFound'){
                return res.sttus(404).send({
                    message:" Fallas Moto no encontrado"
                });
            }
            return res.status(500).send({
                message:"Ocurrio un error en el registro"
            })
        })
    });
};