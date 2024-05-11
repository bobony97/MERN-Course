const { response } = require('express');
const Evento = require('../models/Event');


const getEvents = (req, res = response) => {


    return res.status(201).json({
        ok: true,
        msg: 'Obteniendo Eventos'
    })
}

const createEvent = async(req, res = response) => {

    const evento = new Evento( req.body );

    try {
        evento.user = req.uid; //Le asignamos a la propiedad "user" de la colección "Event" el id del usuario de la colección "User" para establecer la relación
        const eventSaved = await evento.save();

        return res.status(201).json({
            ok: true,
            eventSaved
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        })
    }
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

