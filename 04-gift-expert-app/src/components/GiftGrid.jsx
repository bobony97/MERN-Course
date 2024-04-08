import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";

export const GiftGrid = ({category}) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect( () =>  {
    getImages();  //Indicamos el codigo que queremos ejecutar
  }, [])

  return (
    <>
        <h3>{category}</h3>
        <ol>
          {
            images.map(img => (
              <li key={img.id}>{img.title}</li>
            ))
          }
        </ol>
    </>
  )
}


