/*
    Rutas de Usuarios /Auth
    host + api/auth
*/
const { Router } = require('express');
const router = Router();

/*
    La función check se utiliza para definir reglas de validación para campos específicos en una solicitud HTTP. 
    Esta función es especialmente útil cuando necesitas validar un campo específico, como un campo de entrada en un formulario o un parámetro en una solicitud.
*/
const { check } = require('express-validator');

const { createUser, loginUser, revalidatedToken } = require('../controllers/auth')

//Rutas
router.post(
    '/new', 
    [//Middlewares
        check('name', 'El nombre es obligatorio.').notEmpty(),
        check('email', 'El email es obligatorio.').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 })
    ], 
    createUser
)

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 })
    ], 
    loginUser
)

router.get(
    '/renew',
    [

    ], 
    revalidatedToken
)

module.exports = router