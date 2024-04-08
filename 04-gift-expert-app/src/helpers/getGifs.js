export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aFpWen4ytCKAVLrUsq1Hzbh4IG24oQBz&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs;
    //Sacamos la funcion del componente para que al detectar cambios en el componente no vuelva a redibujar el componente y vuelva hacer la peticion a la api
  }