import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

//Forma 1

// export const GiftExpertApp = () => {

//   const [categories, setCategories] = useState([`One Punch`, `Dragon Ball`]);

//   //Evitar usar push en los array porque afecta la mutabilidad y eso es algo que en react se tiene que evitar
//   const onAddCategory = (  ) => {
//     setCategories([...categories, `Valorant`]);
//     // setCategories( cat => [...cat, `Valorant`] );
//   }

//   return (
//     <>
//         <h1>GiftExpertApp</h1>
//         <AddCategory  setCategories={ setCategories } />  {/*Enviamos el state al componente hijo  */}
//         <ol>
//           { categories.map( category => {
//             return <li key={ category }> { category } </li>
//           } ) }
//         </ol>
//     </>
//   )
// }

//Forma 2 (correcta de hacer el componente)

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([`One Punch`]);

  //Evitar usar push en los array porque afecta la mutabilidad y eso es algo que en react se tiene que evitar
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return; //Valida que en el array no haya datos repetidos
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GiftGrid 
          key={category} 
          category={category}
        />
      ))}
    </>
  );
};
