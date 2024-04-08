import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
//Creacion del custom Hook de un fetch a la api, un state y un effect
export const useFetchGift = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect( () =>  {
    getImages();  //Indicamos el codigo que queremos ejecutar
  }, [])

  return {
    images,
    isLoading
  };
};
