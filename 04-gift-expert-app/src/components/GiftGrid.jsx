import { useFetchGift } from "../hooks/useFetchGift";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({category}) => {

  const { images, isLoading } = useFetchGift( category );

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


