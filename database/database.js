const mongoose = require('mongoose');
mongoose.set('strictQuery',false);


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log("Base de datos conectada")
    } catch {
        console.log("No se pudo conectar a la base de datos")
        
    }
}


module.exports = {connect}