import { useEffect, useState } from "react"

const localCache = {

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

        if( localCache[url] ) {
            console.log("Usando cache");
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });

            return;
        }

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

        localCache[ url ] = data;
    }
    

  return {
    data: state.data,
    loading: state.isLoading,
    hasError: state.hasError
  }

}
