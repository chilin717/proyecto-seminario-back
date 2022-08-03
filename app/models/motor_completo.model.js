const mongoose=require('mongoose');

const motor_completoSchema = mongoose.Schema({
    id:{
        type:Int32Array,
        min:1,
        require:true
        
    },
    biela:{
        type:String,
        minlength:4

    },
    marca_biela:{
        type:String,        
        minlength:4
        
    },
    bailneras_ciguenal:{
        type:String,
        min:2
    },
    marca_balineras_cigueñal:{
        type:String,
        min:2
    },
    balineras_motor:{
        type:String,
        min:2
    },
    marca_balineras_motor:{
        type:String,
        min:2
    }, 
    discos_closh:{
        type:String,
        min:2
    },
    
    marca_discos_closh:{
        type:String,
        min:2
    },
    balancines:{
        type:String,
        min:2
    },
    marca_balancines:{
        type:String,
        min:2
    },
   
    cilindro:{
        type:String,
        min:2
    },
    marca_cilindro:{
        type:String,
        min:2
    },
    retenes:{
        type:String,
        min:2
    },
    marca_retenes:{
        type:String,
        min:2
    },
    valvulas:{
        type:String,
        min:2
    },
    marca_valvulas:{
        type:String,
        min:2
    },
    guias_cadenilla:{
        type:String,
        min:2
    },
    marca_guias_cadenilla:{
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
    empaques:{
        type:String,
        min:2
    },
    marca_empaques:{
        type:String,
        min:2
    },
    
    observacion:{
        type:String,
        min:2
    },
    
},{
    timestamps:true
});
module.exports=mongoose.model('Motor_completo', motor_completoSchema);