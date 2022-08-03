const Cabeza_Fuerza = require('../models/cabeza_fuerza.model.js');


exports.create=(req,res)=>{
    console.log("Crear");
    console.log(req.body);
    const cabeza_fuerza = new Cabeza_Fuerza(req.body);
    cabeza_fuerza.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Cabeza_Fuerza.find().then(cabezas_fuerza=>{
        res.status(200).send(cabezas_fuerza);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrio algo incorrecto"
        });
    });
    console.log("Listando");
};

exports.findOne=(req,res)=>{
    Cabeza_Fuerza.findById(req.params.id).then(cabeza_fuerza=>{
        if(!cabeza_fuerza){
            return res.status(400).send({
                message:"Fallas Moto no encontrado"
            });
        }
        res.status(200).send(cabeza_fuerza);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Cabeza Fuerza no encontrado"
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
            message:"Los datos de Cabeza Fuerza no pueden estar vacios"
        });
    }
    Cabeza_Fuerza.findByIdAndUpdate(req.params.id,{
        id:req.body.id || 0,
        cilindro:req.body.cilindro ,
        marca_cilindro:req.body.marca_cilindro,
        valvulas:req.body.valvulas,        
        marca_valvulas:req.body.marca_valvulas, 
        cadenilla:req.body.cadenilla,
        marca_cadenilla:req.body.marca_cadenilla,
        guias_cadenilla:req.body.guias_cadenilla,      
        observacion: req.body.observacion || null
    },{new:true}).then(cabeza_fuerza=>{
        if(!cabeza_fuerza){
            return res.status(404).send({
                message:"Cabeza Fuerza no encontrado"
            });
        }
        res.status(200).send(cabeza_fuerza);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Cabeza Fuerza no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
};

exports.delete=(req,res)=>{
    Cabeza_Fuerza.findByIdAndRemove(req.params.id).then(cabeza_fuerza=>{
        if(!cabeza_fuerza){
            return res.status(404).send({
                message:"Cabeza Fuerza no encontrado"
            });
        }
        res.status(200).send({
            message:"Cabeza Fuerza eliminado con exito"
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