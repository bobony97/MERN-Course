/*
    Rutas de Usuarios /Auth
    host + api/auth
*/
const { Router } = require('express');
const router = Router();

const { createUser, loginUser, revalidatedToken } = require('../controllers/auth')

//Rutas
router.post('/new', createUser)

router.post('/', loginUser)

router.get('/renew', revalidatedToken)

module.exports = router