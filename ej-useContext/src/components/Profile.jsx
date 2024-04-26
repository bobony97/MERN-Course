import { useContext } from "react"
import { UserContext } from "../context/User/UserContext"


export const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  console.log(selectedUser)

  return (
    <>
      {
        selectedUser ? ( <div className="card card-body text-center">
          <img className="card-img-top rounded-circle m-auto img-fluid" src={selectedUser.avatar} alt={selectedUser.first_name} />
          <h1> { `${selectedUser.first_name} ${selectedUser.last_name}` } </h1>
          <h3> { selectedUser.email } </h3>
        </div> ) : ( <h1>No User Selected</h1> )
      }
    </>
  )
}
