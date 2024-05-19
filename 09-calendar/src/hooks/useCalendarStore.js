import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSelectActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import calendarAPI from "../api/calendarAPI.JS";

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

    return {
        //Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
    }
}