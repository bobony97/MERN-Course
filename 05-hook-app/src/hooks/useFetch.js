import { useEffect, useState } from "react"

const localCache = {   //Creacion del objeto cache donde vamos a almacenar las referencias que trae el fetch 

};


export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch();
    }, [url])

    const setLoadingState = () => {
        setState({
            data:null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    const getFetch = async() => {

        /*
            En la función useFetch, antes de hacer la solicitud fetch al servidor, se verifica si la URL ya existe en el localCache. Si existe, significa que ya se ha hecho una solicitud previa 
            a esa URL y la respuesta está almacenada en el cache. En ese caso, se utiliza la respuesta almacenada en lugar de hacer una nueva solicitud.
        */

        if( localCache[url] ) {    // Verificar si la URL está en el cache
            setState({
                data: localCache[url],  // Utilizar la respuesta del cache
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
        // Si la URL no está en el cache, hacer la solicitud fetch

        setLoadingState();

        const resp = await fetch( url );

        //Sleep
        await new Promise( resolve => setTimeout( resolve, 1500 ));

        if ( !resp.ok ) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    code: resp.statusText
                }
            });
            return; //Se coloca un return para que no siga ejecutandose nada mas
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        console.log(data)

        //Manejo del cache

        localCache[ url ] = data;  // Guardar la respuesta en el cache
    }
    

  return {
    data: state.data,
    loading: state.isLoading,
    hasError: state.hasError
  }

}
