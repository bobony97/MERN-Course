const { response } = require('express');


const getEvents = (req, res = response) => {


    return res.status(201).json({
        ok: true,
        msg: 'Obteniendo Eventos'
    })
}

const createEvent = (req, res = response) => {

    console.log(req.body);

    return res.status(201).json({
        ok: true,
        msg: 'Crear Evento'
    })
}

const updateEvent = (req, res = response) => {


    return res.status(201).json({
        ok: true,
        msg: 'Actualizando Evento'
    })
}
const deleteEvent = (req, res = response) => {


    return res.status(201).json({
        ok: true,
        msg: 'Borrando Eventos'
    })
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

