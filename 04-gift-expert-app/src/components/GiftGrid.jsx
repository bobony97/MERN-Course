import { getGifs } from "../helpers/getGifs";
export const GiftGrid = ({category}) => {

  getGifs(category);

  return (
    <>
        <h3>{category}</h3>
    </>
  )
}


