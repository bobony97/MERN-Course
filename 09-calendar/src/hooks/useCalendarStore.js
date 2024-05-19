import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSelectActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import calendarAPI from "../api/calendarAPI.JS";
import { convertsEventsToDateEvents } from "../helpers/convertsEventsToDateEvents";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSelectActiveEvent( calendarEvent ));
    }

    const startSavingEvent = async(calendarEvent) => {
        if(calendarEvent._id) {
            //Actualizando
            dispatch( onUpdateEvent(calendarEvent) );
        } else {
            //Creando
            const { data } = await calendarAPI.post('/events', calendarEvent);
            console.log({data})
            dispatch( onAddNewEvent({
                ...calendarEvent,
                id: data.eventSaved.id,
                user
            }))
        }
    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent());
    }

    const startLoadingEvents = async() => {
        try {
            const { data } = await calendarAPI.get('/events');
            const events = convertsEventsToDateEvents( data.events );
            dispatch( onLoadEvents(events) );
        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error)
        }
    }

    return {
        //Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}