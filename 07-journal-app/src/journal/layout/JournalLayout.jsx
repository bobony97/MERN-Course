import { Box } from '@mui/material'
import { Navbar } from '../components/Navbar';

export const JournalLayout = ({ children }) => {

    const drawnerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>

      <Navbar drawnerWidth={ drawnerWidth } />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            { children }
        </Box>
    </Box>
  )
}
