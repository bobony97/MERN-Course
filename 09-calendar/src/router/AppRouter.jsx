import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';
import { CalendarPage } from '../calendar/pages/CalendarPage';

export const AppRouter = () => {

    const status = 'not-authenticated';

  return (
    <Routes>
        {
            (status === 'not-authenticated')
            ? <Route path='/auth/*' element={ <LoginPage />  } />
            :<Route path='/*' element={ <CalendarPage />  } />
        }
        <Route path='/*'  element={ <Navigate to='/auth/login' /> } />
    </Routes>
  )
}
