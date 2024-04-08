import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GiftItem } from "./GiftItem";

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
        <div className="card-grid">
          {
            images.map(img => (
              <GiftItem 
                key={img.id} 
                {...img}
              />
            ))
          }
        </div>
    </>
  )
}


