const createUser = (req, res) => {

    //req.body: Es la informacion enviada por el cliente y se obtiene con el middleware "app.use( express.json());" que esta en el index.js
    const { name, email, password } = req.body;

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