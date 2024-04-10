import {useEffect, useState} from 'react'

//Este componente va a ser llamado al componente "SimpleForm" y lo que va hacer es que cuando el "username" del componente "SimpleForm" sea igual a "strider2" se va a llamar a este componente
//Y eso va a disparar el "useEffect" que captura los movimientos del mouse y mostrando su estado por pantalla a traves de un "useState", en el momento en el que el "username" deje de ser
//Igual a "strider2" el componente se va a desmontar y dejara de recopilar la informacion del movimiento del mouse, limpiando todo tipo de efecto del mismo
//ACLARACION: Si el "listener" no se remueve y el mouse se sigue moviendo vamos a seguir intentando actualizar el estado de las "coors" o del componente que ya no existe
export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 })   //Se crea el estado para almacenar las coordenadas del mouse

    useEffect(() => {
        const onMouseMove = ({x, y}) => {   //Creamos una funcion que reciba "x, y" que al ser desestructuradas de "event" van a recibir las coordenadas y van a modificar el estado de "coords"  
            setCoords({ x, y })
        }


        window.addEventListener(`mousemove`, onMouseMove)  //Llamamos al listener que escucha el movimiento del mouse y a la funcion anterior
    
        return () => {   //El return es utilizado para limpiar los efectos generados por el "useEffect" en si. Esta funcion de limpieza se ejecuta cantes de que el componente se desmonte, antes de ser
                       //eliminado del DOM
            window.removeEventListener(`mousemove`, onMouseMove) //Este es el efecto secundario que vamos a limpiar antes de desmontar el componente. En este caso elimina el "listener" llamado
                                                         //anteriormente
        }
        
    },[])  //El [] indica que este efecto no tiene dependencias, lo que significa que el efecto se ejecutará solo una vez, cuando el componente se monte por primera vez, y se limpiará 
            //cuando el componente se desmonte.
    

  return (
    <>
        <h3>Usuario Ya Existe</h3>
        { JSON.stringify(coords) }
    </>
  )
}
