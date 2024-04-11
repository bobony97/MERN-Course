import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const { data, loading, hasError } = useFetch( `https://pokeapi.co/api/v2/pokemon/3` );

  return (
    <>
        <h1> Información de Pokemon </h1>
        <hr />
        {
            loading && <p>Cargando...</p> 
        }
        <h2> { data?.name } </h2>
    </>
  )
}
