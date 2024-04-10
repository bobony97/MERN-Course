import { useState } from "react"


//HOOK QUE SIMULA UN CARRITO DE COMPRAS
export const useCounter = ( initialValue = 10 ) => {  //La persona envia el valor inicial por el argumento, caso contrario este valor sera de "10"

    const [counter, setCounter] = useState(initialValue);

    //Funcion de retorno para nuestro custom hook, que incrementa el estado en +1
    const increment = (value) => {     //Si queremos que el numero no se incremente de 1 en 1, podemos enviarle un parametro para que el usuario determine de cuanto se va a incrementar
        setCounter(counter + value);
    }

    //Funcion de retorno para nuestro custom hook, que decrementa el estado en 11
    const decrement = () => {     
        if(counter === 0) return; //Validacion, si el counter es igual a cero entonces no va hacer nada mas
        setCounter(counter - 1);
    }

    //Funcion de retorno para nuestro custom hook, que resetea el estado a su valor original
    const reset = () => {         
        setCounter(initialValue);
    }
 
    return {
        counter,   //Retornamos el estado del "counter"
        increment,
        decrement,
        reset
    }
}