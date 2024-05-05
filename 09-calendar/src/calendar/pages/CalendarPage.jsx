import { Navbar } from '../components/Navbar'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import esES from 'date-fns/locale/es'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesEs } from '../../helpers/getHelpers';
import { CalendarEvent } from '../components/CalendarEvent';
import { useState } from 'react';

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem(`lastView`) || 'week');

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '347CF7',
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

  const events = [{
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: 'fafafa',
    user: {
      _id: '123',
      name: 'Fernando'
    }
  }]

  const onDoubleClick = (event) => {
    console.log({doubleClick: event})
  }

  const onSelect = (event) => {
    console.log({click: event})
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
  }

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
    </>
  )
}
