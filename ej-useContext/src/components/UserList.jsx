import { useEffect, useContext } from "react"
import {UserContext} from '../context/User/UserContext'


export const UserList = () => {

  const { users, getUsers, getProfile } = useContext(UserContext); //Implementa el contexto creado y desestructura la informacion

  useEffect(() => {
    getUsers();
  },[])

  return (
    <div className="list-group h-100">
        {
          users.map(user => (
            <a  className="list-group-item list-group-item-action d-flex flex-row justify-content-start" onClick={() => getProfile(user.id)}  href="#!" key={user.id} >
              <img  className="img-fluid mr-4 rounded-circle" width={70} src={user.avatar} alt={user.first_name} />
              <p> { `${user.first_name} ${user.last_name}` } </p> 
            </a>
          ))
        }
    </div>
  )
}
