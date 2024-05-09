const { json } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async(req, res) => {

    //req.body: Es la información enviada por el cliente y se obtiene con el middleware "app.use( express.json());" que esta en el index.js
    const { email, pas } = req.body;

    try {
        let user = await User.findOne({ email }); //Busca en la colección "User" un email que coincida con la información enviada por el cliente para validar su existencia
        if( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese correo'
            })
        }
        user = new User( req.body );

        //Encriptar Contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );

        await user.save();
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}


const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

       if( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario con ese email'
            })
        }

        //Validar las passwords
        const validPassword = bcrypt.compareSync( password, user.password );

        if( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña Incorrecta'
            })
        }

        res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
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