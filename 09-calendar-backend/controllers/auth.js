const User = require('../models/User');

const createUser = async(req, res) => {

    //req.body: Es la información enviada por el cliente y se obtiene con el middleware "app.use( express.json());" que esta en el index.js
    const { email } = req.body;

    
    try {
        let user = await User.findOne({ email }); //Busca en la colección "User" un email que coincida con la información enviada por el cliente para validar su existencia
        if( user ) {
            res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese correo'
            })
        }
        user = new User( req.body );

        await user.save();
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const loginUser = (req, res) => {
    const { email, password } = req.body;

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