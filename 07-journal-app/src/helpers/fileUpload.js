export const fileUpload = async(file) => {
    if (!file) throw new Error('No hay archivos a subir');

    const cloudUrl = `https://api.cloudinary.com/v1_1/drb54pxla/upload`; //drb54pxla: Es el "cloud name de cloudinary"

    /*
        Se crea un objeto FormData. FormData es una interfaz en JavaScript que permite construir fácilmente pares clave/valor para enviar datos en una solicitud HTTP, 
        como si fuera un formulario HTML.

    */
    const formData = new FormData();
    /*
        Se agrega un par clave/valor al objeto FormData. En este caso, se agrega la clave 'upload_preset' con el valor 'react-journal'. Esta información se utiliza para configurar 
        el preset de carga en Cloudinary. Un preset de carga en Cloudinary define cómo se procesarán y almacenarán los archivos que se suban mediante la API.
    */
    formData.append('upload_preset', 'react-journal');
    /*
        e agrega otro par clave/valor al objeto FormData. La clave 'file' se usa para indicar que se está enviando un archivo. El valor file es el archivo que se va a subir, 
        que se recibe como parámetro en la función fileUpload
    */
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        });

        console.log(resp);

        if (!resp.ok) throw new Error('No se ha podido cargar la imagen');

        const cloudResp = await resp.json();
        console.log({cloudResp});

        return cloudResp.secure_url;
    } catch (error) {
        console.log(error)
        throw new Error( error.message )
    }
}