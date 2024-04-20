import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  if(!hero) return <Navigate to={"/marvel"} />

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src="" 
        alt=""
        className="img-thumbnail"
         />
      </div>
    </div>
  )
}
