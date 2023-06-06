const {check}= require('express-validator')

const checks = [
    check('paciente')
        .notEmpty().withMessage('El campo paciente es obligatorio')
        .isString().withMessage('El campo paciente debe ser un string'),
        check('animal')
        .notEmpty().withMessage('El campo paciente es obligatorio')
        .isString().withMessage('El campo paciente debe ser un string'),
    check('añoNacimientoPaciente')
        .notEmpty().withMessage('El campo añoNacimientoPaciente es obligatorio')
        .isNumeric().withMessage('El campo añoNacimientoPaciente debe ser un number'),
        check('dueño')
        .notEmpty().withMessage('El campo dueño es obligatorio')
        .isString().withMessage('El campo dueño debe ser un string'),
    check('historiaClinica')
        .notEmpty().withMessage('El campo historiaClinica es obligatorio')
        .isString().withMessage('El campo historiaClinica debe ser un string'),    
]

module.exports = checks