const mongoose=require('mongoose');

const fallas_motoSchema = mongoose.Schema({
    id:{
        type:Int32Array,
        min:1,
        require:true
        
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
    electrico:{
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
module.exports=mongoose.model('Fallas_Moto', fallas_motoSchema);