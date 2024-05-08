const { validationResult } = require('express-validator');

const createUser = (req, res) => {

    //req.body: Es la informacion enviada por el cliente y se obtiene con el middleware "app.use( express.json());" que esta en el index.js
    const { name, email, password } = req.body;

    //Manejo de Errores
    /*
        Es una forma de obtener los errores de validación resultantes después de aplicar las reglas de validación a una solicitud utilizando express-validator.

    */
    const errors = validationResult( req );

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped() /* .mapped(): Es un método que se puede llamar en el resultado de validationResult(req) para obtener una representación mapeada de los errores de validación. 
                                    Esto significa que los errores se organizan en un objeto donde las claves son los nombres de los campos y los valores son los mensajes de error asociados a esos campos.
                                    */
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const loginUser = (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    res.status(200).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const revalidatedToken = (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    createUser,
    loginUser,
    revalidatedToken
}