import { useEffect, useState } from "react"

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

        //Manejo del cache

        console.log({data});
    }
    

  return {
    data: state.data,
    loading: state.isLoading,
    hasError: state.hasError
  }

}
