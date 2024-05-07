const createUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'registro'
    })
}

const loginUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
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