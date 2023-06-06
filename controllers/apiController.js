const {pacientes} = require('../models/pacientes')

class ApiController {
  
  async listadoPorPaciente (req, res){
    const paciente = await pacientes.find()
    res.status(200).json(paciente)
  }
  async listadoPorAnimal (req, res){
    const paciente = await pacientes.find({animal:req.params.animal})
    res.status(200).json(paciente)
  }
  async buscarPorId (req, res){
    const paciente = await pacientes.findById(req.params.id)
    res.status(200).json(paciente)
  }
  async crear (req, res){
    try {
        const pacienteGuardado = new pacientes (req.body)
        await pacienteGuardado.save()
        res.status(201).json(pacienteGuardado)
      }
     catch (error) {
      res.status(400).json(error)
    }
  } 
  async editar (req,res) {
    try {
      await pacientes.findByIdAndUpdate(req.params.id,req.body)
      res.status(201).json({
        msg: "el paciente con id" + req.params.id + " se actualizó"
      })
    } catch (error) {
      res.status(400).json(error)
    }
  }
  async borrar (req,res){
    await pacientes.findByIdAndDelete(req.params.id)
    res.status(201).json({
      msg: "el paciente con id" + req.params.id + " se borró"
      })
    }
  }
  module.exports = new ApiController