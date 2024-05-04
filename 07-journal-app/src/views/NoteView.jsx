import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../journal/components/ImageGallery'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useRef } from 'react'
import { setActiveNote } from '../store/auth/journal/journalSlice'
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../store/auth/journal/thunks'
import  Swal  from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal);

    const dispatch = useDispatch();

    const { body, title, onInputChange, formState, date } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    },[date])

    const fileInputRef = useRef() //Este "useRef" va a tener la referencia del input de archivos

    useEffect(() => {
        dispatch( setActiveNote(formState) )
    }, [formState])
    
    useEffect(() => {
        if(messageSaved.length > 0) {
            Swal.fire('Nota Actualizada', messageSaved, 'success');
        }
    }, [messageSaved])
    
    const onSaveNote = () => {
        dispatch( startSaveNote() )
    }

    //Esta función va a enviar los archivos a clodinary
    const onFileInputChange = ({ target }) => { //Desestructura el "event" y obtengo el "target"
        if(target.files === 0) return;   //Si no se seleccionó ningún archivo entonces no va a retornar nada y se corta la función

        dispatch( startUploadingFiles( target.files ) ); 
    }

    const onDelete = () => {
        dispatch( startDeletingNote() )
    }

  return (
    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb: 1 }} className="animate__animated animate__fadeIn animate__faster">
        <Grid item>
            <Typography fontSize={39} fontWeight={'light'} > { dateString } </Typography>
        </Grid>
        <Grid item>

            <input 
                type='file'
                multiple
                onChange={ onFileInputChange }
                style={{ display: 'none' }}
                ref={ fileInputRef } //Se establece la referencia
            />

            <IconButton
                color='primary'
                disabled={isSaving}
                onClick={ () => fileInputRef.current.click() } //Aca obtenemos la referencia al hacer click
            >
                <UploadOutlined />
            </IconButton>

            <Button color='primary' sx={{ p: 2 }} onClick={onSaveNote} disabled={isSaving} >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label='Titulo'
                sx={{ border: 'none', mb: 1 }}
                name='title'
                value={title}
                onChange={onInputChange}
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Qué sucedió en el dia de hoy?'
                minRows={5}
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        <Grid container justifyContent='end'>
            <Button 
                onClick={ onDelete } 
                sx={{ mt: 2 }}
                color='error'
            >
                <DeleteOutline />
                Borrar
            </Button>
        </Grid>

        <ImageGallery images={ note.imageUrls } />

    </Grid>
  )
}
