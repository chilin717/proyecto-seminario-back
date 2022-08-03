const Datos_Cliente = require('../models/datos_cliente.model.js');


exports.create=(req,res)=>{
    try {
        console.log("Crear");
    
        console.log(req.body);
        const datos_cliente = new Datos_Cliente(req.body);
        datos_cliente.save();
        res.send({message:'Registro insertado'});
        
    } catch (error) {
     console.error(error);
    }
};

exports.findAll=(req,res)=>{
    Datos_Cliente.find().then(datos_clientes=>{
        res.status(200).send(datos_clientes);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Ocurrio algo incorrecto"
        });
    });
    console.log("Listando");
};

exports.findOne=(req,res)=>{
    Datos_Cliente.findById(req.params.id).then(datos_cliente=>{
        if(!datos_cliente){
            return res.status(400).send({
                message:"Datos Cliente no encontrado"
            });
        }
        res.status(200).send(datos_cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Datos Cliente no encontrado"
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
            message:"Los Datos del Cliente completo no pueden estar vacios"
        });
    }
    Datos_Cliente.findByIdAndUpdate(req.params.id,{
        id:req.body.id || 0,
        cedula:req.body.cedula ,
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        celular:req.body.celular,
  
        
    },{new:true}).then(datos_cliente=>{
        if(!datos_cliente){
            return res.status(404).send({
                message:"Datos Cliente no encontrado"
            });
        }
        res.status(200).send(datos_cliente);
    }).catch(err=>{
        if(err.kind==='ObjectId'){
            return res.status(400).send({
                message:"Datos Cliente no encontrado"
            });
        }
        return res.status(500).send({
            message:"Ocurrio un error en el registro "+req.params.id
        });
    });
};

exports.delete=(req,res)=>{
    Datos_Cliente.findByIdAndRemove(req.params.id).then(datos_cliente=>{
        if(!datos_cliente){
            return res.status(404).send({
                message:"Datos Cliente no encontrado"
            });
        }
        res.status(200).send({
            message:"Datos Cliente eliminado con exito"
        }).catch(err=>{
            if(err.kind==='ObjectId' || err.name==='NotFound'){
                return res.sttus(404).send({
                    message:" Datos Cliente no encontrado"
                });
            }
            return res.status(500).send({
                message:"Ocurrio un error en el registro"
            })
        })
    });
};