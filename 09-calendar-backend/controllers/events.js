const { response } = require('express');
const Event = require('../models/Event');


const getEvents = async(req, res = response) => {

    /*
        La función populate() se utiliza para "rellenar" los campos de referencia de tipo ObjectId en un documento con los documentos reales de la colección referenciada.
        Esto significa que populate() permite sustituir el ID de referencia en un documento por el documento real al que hace referencia ese ID en otra colección.
        La propiedad "name", extrae dicha propiedad del objeto y lo muestra en lugar del resto de las propiedades
    */
    const events = await Event.find()
                                .populate('user', 'name');

    return res.status(201).json({
        ok: true,
        events
    })
}

const createEvent = async(req, res = response) => {

    const event = new Event( req.body );

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

const updateEvent = async(req, res = response) => {

    const eventId = req.params.id; //Accede al id enviado por la url
    const uid = req.uid; //Extrae el uid del usuario que creo el evento

    try {
        const event = await Event.findById( eventId ); //Trae un evento de la DB por el id 

        if( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento con ese id no existe'
            });
        }

        if( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para editar este evento'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        //findByIdAndUpdate Espera 2 parámetros, el primero es el id del evento que quiere actualizar y el segundo es el evento actualizado
        //Esto va a regresar el evento antiguo pero si va a actualizar el evento nuevo en la DB, si queremos que regrese el evento actualizado se debe enviar un tercer parametro "{ new: true }""
        const newEventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        return res.status(201).json({
            ok: true,
            newEventUpdated
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }
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

