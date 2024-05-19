import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSelectActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import calendarAPI from "../api/calendarAPI.JS";
import { convertsEventsToDateEvents } from "../helpers/convertsEventsToDateEvents";
import Swal from 'sweetalert2'

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { user } = useSelector(state => state.auth);

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSelectActiveEvent( calendarEvent ));
    }

    const startSavingEvent = async(calendarEvent) => {

        try {
            if(calendarEvent.id) {
                //Actualizando
                await calendarAPI.put(`events/${calendarEvent.id}`, calendarEvent);
                dispatch( onUpdateEvent({...calendarEvent, user}) );
                return;
            } 
    
            //Creando
            const { data } = await calendarAPI.post('/events', calendarEvent);
            dispatch( onAddNewEvent({
                ...calendarEvent,
                id: data.eventSaved.id,
                user
            }))
        } catch (error) {
            console.log(error)
            Swal.fire('Erro al guardar', error.response.data?.msg, 'error');
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
        hasEventSelected: !! activeEvent,

        //Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}