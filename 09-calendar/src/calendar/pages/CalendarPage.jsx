import { Navbar } from '../components/Navbar'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import esES from 'date-fns/locale/es'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesEs } from '../../helpers/getHelpers';
import { CalendarEvent } from '../components/CalendarEvent';
import { useEffect, useState } from 'react';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { FabAddNew } from '../components/FabAddNew';
import { FabDelete } from '../components/FabDelete';
import { useAuthStore } from '../../hooks/useAuthStore';


export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  const [lastView, setLastView] = useState(localStorage.getItem(`lastView`) || 'week');

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );



    const style = {
      backgroundColor: isMyEvent? '347CF7' : '#465660',
      borderRadius: '0px',
      opacity: '0.8',
      color: 'white'
    }

    return {
      style
    }
  }

  const locales = {
    'es': esES,
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

  const onDoubleClick = (event) => {
    openDateModal();
  }

  const onSelect = (event) => {
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
  }

  useEffect(() => {
    startLoadingEvents();
  },[startLoadingEvents])
  

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessagesEs()}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />

    </>
  )
}
