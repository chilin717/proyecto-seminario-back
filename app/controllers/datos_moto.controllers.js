const Datos_Moto = require('../models/datos_moto.model.js');


exports.create=(req,res)=>{
    console.log("Crear");
    console.log(req.body);
    const datos_moto = new Datos_Moto(req.body);
    datos_moto.save();
    res.send('Registro insertado');
};

exports.findAll=(req,res)=>{
    Datos_Moto.find().then(datos_motos=>{
        res.status(200).send(datos_motos);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrio algo incorrecto"
        });
    });
    console.log("Listando");
};

exports.findOne=(req,res)=>{
    Datos_Moto.findById(req.params.id).then(datos_moto=>{
        if(!datos_moto){
            return res.status(400).send({
                message:"Datos Moto no encontrado"
            });
        }
        res.status(200).send(datos_moto);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Datos Moto no encontrado"
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
            message:"Los Datos del Motor completo no pueden estar vacios"
        });
    }
    Datos_Moto.findByIdAndUpdate(req.params.id,{
        id:req.body.id || 0,
        placa:req.body.placa ,
        marca_moto:req.body.marca_moto,
        tipo_moto:req.body.tipo_moto,
        color:req.body.color,
        cilindraje:req.body.cilindraje,
        
    },{new:true}).then(datos_moto=>{
        if(!datos_moto){
            return res.status(404).send({
                message:"Datos Moto no encontrado"
            });
        }
        res.status(200).send(datos_moto);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Datos Moto no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
};

exports.delete=(req,res)=>{
    Datos_Moto.findByIdAndRemove(req.params.id).then(datos_moto=>{
        if(!datos_moto){
            return res.status(404).send({
                message:"Datos Moto no encontrado"
            });
        }
        res.status(200).send({
            message:"Datos Moto eliminado con exito"
        }).catch(err=>{
            if(err.kind==='ObjectId' || err.name==='NotFound'){
                return res.sttus(404).send({
                    message:" Datos Moto no encontrado"
                });
            }
            return res.status(500).send({
                message:"Ocurrio un error en el registro"
            })
        })
    });
};