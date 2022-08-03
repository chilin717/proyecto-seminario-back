console.log("welcome to Node js");

//importar los modulos
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const clientRoutes = require('../app/routes/datos_cliente.routes')
const motoRoutes = require('../app/routes/datos_moto.routes')
const headRoutes = require('../app/routes/cabeza_fuerza.routes')
const failRoutes = require('../app/routes/fallas_moto.routes')
const mantCompletRoutes = require('../app/routes/mantenimiento_completo.routes')
const mantPrevRoutes = require('../app/routes/mantenimiento_preventivo.routes')
const motoCompletRoutes = require('../app/routes/motor_completo.routes')
const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());




//Configurar la base de datos
const dbconfig=require('../config/database.config.js');
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

// require('../app/routes/product.routes.js')(app);
app.use(express.json());

//Conexion a la base de datos
mongoose.connect(dbconfig.url,{
    UseNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Conexion correcta");
}).catch(err=>{
    console.log(err);
    process.exit();
})

var port=process.env.PORT || 3000;

//routes

app.use('/api',clientRoutes)
app.use('/api',motoRoutes)
app.use('/api',headRoutes)
app.use('/api',failRoutes)
app.use('/api',mantCompletRoutes)
app.use('/api',mantPrevRoutes)
app.use('/api',motoCompletRoutes)
app.listen(port,()=>
    console.log('Servidor en el puerto: ' , port)
);

