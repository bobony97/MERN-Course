import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { setActiveNote } from '../../store/auth/journal/journalSlice'
import { useDispatch } from 'react-redux'

export const SidebarItem = ({ title = '', body, id, date, imageUrls = []}) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}));
    }

    const newTitle = useMemo(() => {
        return title.length > 17
        ? title.substring(0,17) + '...'
        : title;
    }, [title])

  return (
    <ListItem disablePadding > {/*: Cada <ListItem> representa un elemento de la lista. Se utiliza disablePadding para eliminar el relleno predeterminado 
                                                del ListItem y evitar el espacio adicional. */}
        <ListItemButton onClick={onClickNote} > {/*Este componente se utiliza dentro de <ListItem> para crear un botón que envuelve el contenido del ListItem. 
                            Proporciona comportamientos interactivos, como cambios de estilo al pasar el cursor sobre el elemento. */}
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle } /> {/*Este componente se utiliza para mostrar texto dentro del ListItem. El primary prop se utiliza para mostrar el texto principal, 
                                que en este caso son los nombres de los meses, y el secondary prop se utiliza para mostrar texto secundario, que en este caso es una descripción breve. */}
                <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
</ListItem>
  )
}
