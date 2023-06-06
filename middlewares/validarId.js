const {veterinaria, pacientes}= require('../models/pacientes')
const validarId = async (req,res,next) =>{
    const busqueda = await pacientes.findById(req.params.id)
    if (busqueda!== null) {
        next()
    }else{
        res.status(500).json({
            msg: "El id" + req.params.id + " es invalido"
        })
    }
}

module.exports = {validarId}