const joi = require('joi');

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp('^([a-z]+)( [a-z]+)*$', 'i')).required().messages({
            'string.min': 'firstName / Please, enter a NAME that is at least 3 characters long',
            'string.max': "firstName / El nombre debe contener como maximo 20 caracteres"
        }),
        lastName: joi.string().max(20).min(2).trim().pattern(new RegExp('^([a-z]+)( [a-z]+)*$', 'i')).required().messages({
            // 'string.min': 'lastName / El cognome debe contener mas de 3 caracteres',
            'string.max': "lastName / El cognome debe contener como maximo 20 caracteres"
            //^([a-z]+)( [a-z]+)*$
        }),
        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email': 'Formato incorrecto de email'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min': 'El password debe contener minimo 8 caracteres y contener mayuscula, minuscula y numero',
            'string.pattern': "El password debe ser alphanumerico y contener un numero"
        }),
        picture: joi.string(),
        country: joi.string(),
        from: joi.string()
    })
    const validation = schema.validate(req.body.userData, { abortEarly: false })
    console.log(validation.error)
    if (validation.error) {
        return res.json({ success: false, message: validation.error.details })
    }
    next()
}

module.exports = validator