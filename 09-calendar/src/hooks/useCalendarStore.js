import { useDispatch, useSelector } from "react-redux"
import { onSelectActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar)

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSelectActiveEvent( calendarEvent ));
    }

    return {
        //Propiedades
        events,
        activeEvent,

        //Metodos
        setActiveEvent,
    }
}