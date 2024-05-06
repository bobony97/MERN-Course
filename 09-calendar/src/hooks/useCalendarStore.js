import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSelectActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSelectActiveEvent( calendarEvent ));
    }

    const startSavingEvent = async(calendarEvent) => {
        if(calendarEvent._id) {
            //Actualizando
        } else {
            //Creando
            dispatch( onAddNewEvent({
                ...calendarEvent,
                id: new Date().getTime()
            }))
        }
    }

    return {
        //Propiedades
        events,
        activeEvent,

        //Metodos
        setActiveEvent,
        startSavingEvent
    }
}