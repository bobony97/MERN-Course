/*
async: La palabra clave async se utiliza para declarar que una función es asíncrona. Cuando una función se declara como async, significa que esta función retornará una Promesa. 
Dentro de una función async, puedes utilizar la palabra clave await para esperar que una Promesa se resuelva antes de continuar con la ejecución del código.

await: La palabra clave await se utiliza dentro de funciones declaradas como async para esperar que una Promesa se resuelva. Cuando se utiliza await, 
la ejecución de la función async se detiene hasta que la Promesa se resuelva. Esto permite escribir código asíncrono de una manera más secuencial y legible, similar a cómo se escribe 
código síncrono.
*/

const getImages = async() => {  
    try {
        const apiKey = "aFpWen4ytCKAVLrUsq1Hzbh4IG24oQBz";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
    
        const { url }  = data.images.original;
        const img = document.createElement("img"); 
        img.src = url;    
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
}

getImages();

