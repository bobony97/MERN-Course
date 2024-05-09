const User = require('../models/User');

const createUser = async(req, res) => {

    //req.body: Es la informacion enviada por el cliente y se obtiene con el middleware "app.use( express.json());" que esta en el index.js
    const { name, email, password } = req.body;

    const user = new User( req.body );

    try {
        await user.save();
    
        res.status(201).json({
            ok: true,
            msg: 'registro',
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