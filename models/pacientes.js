const {Schema, model} = require ('mongoose');

const schema = new Schema({
    paciente:{
        type: String,
        require: true,
    },
    animal:{
        type: String,
        require: true,
    },
    añoNacimientoPaciente: {
        type: Number,
        require: true,
    },
    dueño: {
        type: String,
        require: true,
    },
    historiaClinica: {
        type: String,
    }  
})

const pacientes = model('pacientes', schema);
module.exports = {pacientes};