const mongoose=require('mongoose');

const mantenimiento_preventivoSchema = mongoose.Schema({

    id:{
        type:Int32Array,
        min:1,
        require:true
        
    },
    cambio_aceite:{
        type:String,
        minlength:4

    },
    marca_aceite:{
        type:String,        
        minlength:4
        
    },
    kilometraje:{
        type:Int32Array,
        min:2
    },
    filtro_aceite:{
        type:String,
        min:2
    },
    original_filtro_aceite:{
        type:String,
        min:2
    },
    filtro_aire:{
        type:String,
        min:2
    }, 
    original_filtro_aire:{
        type:String,
        min:2
    },
    
    calibracion:{
        type:String,
        min:2
    },
    valvulas:{
        type:String,
        min:2
    },
    carburador:{
        type:String,
        min:2
    },
   
    pastillas_bandas_del:{
        type:String,
        min:2
    },
    marca_pastillas_bandas_del:{
        type:String,
        min:2
    },
    balineras_del:{
        type:String,
        min:2
    },
    marca_balineras_del:{
        type:String,
        min:2
    },
    liquido_freno_del:{
        type:String,
        min:2
    },
    marca_liquido_freno_del:{
        type:String,
        min:2
    },
    pastillas_bandas_tras:{
        type:String,
        min:2
    },
    marca_pastillas_bandas_tras:{
        type:String,
        min:2
    },
    balineras_tras:{
        type:String,
        min:2
    },
    marca_balineras_tras:{
        type:String,
        min:2
    },
    liquido_freno_tras:{
        type:String,
        min:2
    },
    marca_liquido_freno_tras:{
        type:String,
        min:2
    },
    lubricacion_guayas:{
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
module.exports=mongoose.model('Mantenimiento_Preventivo', mantenimiento_preventivoSchema);