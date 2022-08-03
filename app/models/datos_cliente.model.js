
const mongoose=require('mongoose');

const datos_clienteSchema = mongoose.Schema({
     
   
        
    cedula:{
        type:String,
        min:5,
        require:true
        
    },
    nombre:{
        type:String,
        index:true,
        required:true,
        minlength:4

    },
    apellidos:{
        type:String,
        index:true,
        required:true,
        minlength:4
        
    },
    celular:{
        type:String,
        min:5
    }
},{
    timestamps:true
});
module.exports=mongoose.model('Datos_Cliente', datos_clienteSchema);