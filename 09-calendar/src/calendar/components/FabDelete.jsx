import { useCalendarStore } from "../../hooks/useCalendarStore";


export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore()

    const handleDelete = () => {
      startDeletingEvent();
    }

  return (
    <button className="btn btn-danger fab-danger"  style={{ display: hasEventSelected ? '' : 'none' }} onClick={ handleDelete }>
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
