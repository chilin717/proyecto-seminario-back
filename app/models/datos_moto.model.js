
const mongoose=require('mongoose');

const datos_motoSchema = mongoose.Schema({
     
    id:{
        type:Number,
        min:3,
        required:true
        
    },

    placa:{
        type:String,
        min:3,
        required:true
        
    },
    marca_moto:{
        type:String,
        index:true,
        required:true,
        minlength:4

    },
    tipo_moto:{
        type:String,
        index:true,
        required:true,
        minlength:4
        
    },
    color:{
        type:String,
        min:2
    },
    cilindraje:{
        type:String,
        min:2
    },
},{
    timestamps:true
});
module.exports=mongoose.model('Datos_Moto', datos_motoSchema);