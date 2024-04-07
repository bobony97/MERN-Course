import { useState } from "react"

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([`One Punch`, `Dragon Ball`]);

  //Evitar usar push en los array porque afecta la mutabilidad y eso es algo que en react se tiene que evitar
  const onAddCategory = () => {
    setCategories([...categories, `Valorant`]);
    // setCategories( cat => [...cat, `Valorant`] );  //Otra forma de 
  }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <button onClick={ onAddCategory } >Agregar</button>
        <ol>
          { categories.map( category => {
            return <li key={ category }> { category } </li>
          } ) }
        </ol>
    </>
  )
}
