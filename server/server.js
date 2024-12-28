let express = require('express'); /*constante no variable*/
let mongoose = require('mongoose');
let cors = require('cors');
let cancionesRoutes = require('./routes/cancionesRoutes');
let app = express();
let port = 3000;

/*Metodo use permite usar los elementos tipo router*/
async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/music', {useNewUrlParser:true, useUnifiedTopology:true});
    }catch(err){
        console.error("Error en la conexion a BDD", err)
        process.exit(1);
    }
}

connectDB();
app.use(express.json());
app.use('/canciones', cancionesRoutes)
app.use/(cors());

app.listen(port, () =>{
    console.log("server is up")
})

/*MVC
EN EL BACKEND
MODELO-VISTA-CONTROLADOR
LAS VISTAS SON REEMPLAZADAS POR LAS RUTAS O NOS ENDPOINTS
CONTROLADOR: LOGICA DEL PROGRAMA
*/





app.use(express.json());
app.use(cancionRoutes);

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
