import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar //se utiliza para crear la barra de navegación superior (también conocida como barra de aplicación) en una interfaz de usuario
        position='fixed'
        sx={{ 
            width: {sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px` }
        }}
    >
        <Toolbar>
            <IconButton //Este componente se utiliza para crear botones con iconos
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined /> {/*Tipo de icono */}
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'  > Journal App </Typography>

                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}
