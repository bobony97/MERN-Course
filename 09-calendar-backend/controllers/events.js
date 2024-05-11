const { response } = require('express');
const Evento = require('../models/Event');


const getEvents = async(req, res = response) => {

    /*
        La función populate() se utiliza para "rellenar" los campos de referencia de tipo ObjectId en un documento con los documentos reales de la colección referenciada.
        Esto significa que populate() permite sustituir el ID de referencia en un documento por el documento real al que hace referencia ese ID en otra colección.
        La propiedad "name", extrae dicha propiedad del objeto y lo muestra en lugar del resto de las propiedades
    */
    const eventos = await Evento.find()
                                .populate('user', 'name');

    return res.status(201).json({
        ok: true,
        eventos
    })
}

const createEvent = async(req, res = response) => {

    const event = new Evento( req.body );

    try {
        evento.user = req.uid; //Le asignamos a la propiedad "user" de la colección "Event" el id del usuario de la colección "User" para establecer la relación
        const eventSaved = await event.save();

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

