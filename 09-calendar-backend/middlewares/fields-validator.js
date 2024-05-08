const { response } = require('express'); //Se vuelve a llamar al modulo de express para obtener el tipado
const { validationResult } = require('express-validator');

const fieldsValidator = (req, res = response, next) => {

    //Es una forma de obtener los errores de validación resultantes después de aplicar las reglas de validación a una solicitud utilizando express-validator.
    const errors = validationResult( req );

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped() /* .mapped(): Es un método que se puede llamar en el resultado de validationResult(req) para obtener una representación mapeada de los errores de validación. 
                                    Esto significa que los errores se organizan en un objeto donde las claves son los nombres de los campos y los valores son los mensajes de error asociados a esos campos.
                                    */
        })
    }

    /*
        next() Es una función que se utiliza para pasar el control al siguiente middleware en la cadena de middleware o a la ruta siguiente en el flujo de ejecución de la solicitud. 
        Es esencialmente una forma de decirle a Express que continúe con el siguiente paso después de que se haya completado el trabajo actual en el middleware actual.
    */
    next();
}

module.exports = {
    fieldsValidator 
}