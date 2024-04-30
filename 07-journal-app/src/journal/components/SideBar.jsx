import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{ display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'> { displayName } </Typography>
            </Toolbar>
            <Divider />

            <List>  {/*Este componente se utiliza para crear una lista de elementos en Material-UI */}
                {
                    ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL'].map( text => (
                        <ListItem key={text} disablePadding > {/*: Cada <ListItem> representa un elemento de la lista. Se utiliza disablePadding para eliminar el relleno predeterminado 
                                                                del ListItem y evitar el espacio adicional. */}
                            <ListItemButton> {/*Este componente se utiliza dentro de <ListItem> para crear un botón que envuelve el contenido del ListItem. 
                                             Proporciona comportamientos interactivos, como cambios de estilo al pasar el cursor sobre el elemento. */}
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } /> {/*Este componente se utiliza para mostrar texto dentro del ListItem. El primary prop se utiliza para mostrar el texto principal, 
                                    que en este caso son los nombres de los meses, y el secondary prop se utiliza para mostrar texto secundario, que en este caso es una descripción breve. */}
                                    <ListItemText secondary={ 'Sint irure ea ipsum commodo amet sit' } />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
