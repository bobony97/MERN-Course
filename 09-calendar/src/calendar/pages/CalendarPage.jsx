import { Navbar } from '../components/Navbar'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import enUS from 'date-fns/locale/en-US'
import { addHours, format, parse, startOfWeek, getDay } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const CalendarPage = () => {

  const locales = {
    'en-US': enUS,
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
    notes: 'Hay que comprar el pasterl',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: 'fafafa',
    user: {
      _id: '123',
      name: 'Fernando'
    }
  }]

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
    />
    </>
  )
}
