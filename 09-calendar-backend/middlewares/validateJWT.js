const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = ( req, res = response, next ) => {

    //x-token headers
    /*
        .header('x-token'): Es un método de Express que se utiliza para obtener el valor de un encabezado específico de la solicitud. En este caso, 'x-token' 
        es el nombre del encabezado del que se quiere obtener el valor.
    */
    const token = req.header('x-token');
    if( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        })
    }

    try {
        /*
            La función jwt.verify se utiliza para verificar la validez y autenticidad de un token JWT.
            Esta función espera el token que se quiere validar y la clave generada propiamente para JWT
        */
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    }

    next();
}

module.exports = {
    validateJWT
}