import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//   id: `123`,
//   name: `Fernando Herrera`,
//   email: `fernando@google.com`
// }

export const UserProvider = ({ children }) => { //Opcional recibir los "childrens" o los hijos que va a tener el componente

  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hola: `Mundo`, user: user }} >
    <UserContext.Provider value={{ user, setUser }} >
      { children }
    </UserContext.Provider>
  )
}
