const mongoose=require('mongoose');

const cabeza_fuerzaSchema = mongoose.Schema({
    id:{
        type:Int32Array,
        min:1,
        require:true
        
    },
    cilindro:{
        type:String,
        minlength:4

    },
    marca_cilindro:{
        type:String,        
        minlength:4
        
    },
    valvulas:{
        type:String,
        min:2
    },
    marca_valvulas:{
        type:String,
        min:2
    },
    cadenilla:{
        type:String,
        min:2
    },
    marca_cadenilla:{
        type:String,
        min:2
    }, 
    guias_cadenilla:{
        type:String,
        min:2
    },      
    observacion:{
        type:String,
        min:2
    },
    expiration:Date
},{
    timestamps:true
});
module.exports=mongoose.model('Cabeza_Fuerza', cabeza_fuerzaSchema);