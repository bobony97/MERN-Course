import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSelectActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSelectActiveEvent( calendarEvent ));
    }

    const startSavingEvent = async(calendarEvent) => {
        if(calendarEvent._id) {
            //Actualizando
            dispatch( onUpdateEvent(calendarEvent) );
        } else {
            //Creando
            dispatch( onAddNewEvent({
                ...calendarEvent,
                id: new Date().getTime()
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