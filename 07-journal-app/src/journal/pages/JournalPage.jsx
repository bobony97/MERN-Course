import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../../views/NothingSelectedView'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { startNewNote } from '../../store/auth/journal/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { NoteView } from '../../views/NoteView'

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal );

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>

      {
        active ? <NoteView /> : <NothingSelectedView />
      }
      
      <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={ isSaving }
        sx={{ 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
      }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
