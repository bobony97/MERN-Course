import { useFetchGift } from "../hooks/useFetchGift";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({category}) => {

  const { images, isLoading } = useFetchGift( category );

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)  //Retorna un mensaje si el "isLoading esta en false"
        }
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


