const apiKey = "aFpWen4ytCKAVLrUsq1Hzbh4IG24oQBz";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);   //Se realiza la petición

peticion
.then( resp => resp.json() )   //Con then() manejamos la respuesta (resp).  Dentro de este método, llamamos a resp.json(). Esto convierte la respuesta de la petición a un objeto JavaScript
.then( ({ data }) =>  {  //(Desestructuramos "data")     //-usando el método json(), el cual también devuelve una Promesa que resuelve el cuerpo de la respuesta como un objeto JavaScript.
    const { url } = data.images.original;   //De "data" extraemos la propiedad "images.original"
    const img = document.createElement("img"); //Creamos un elemento "img"
    img.src = url;          //Establecemos el atributo "src" y le mandamos la "url"

    document.body.append(img);  //Mandamos toda la "img" al body
})
.catch( console.warn )   //Y por ultimo el "catch" va a atrapar cualquier error encontrado y a enviarlo con warning por consola 