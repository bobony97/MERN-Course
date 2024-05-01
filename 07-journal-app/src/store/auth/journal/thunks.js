import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote } from "./journalSlice";

export const startNewNote = () => {
    return async(dispatch, getState) => {

        console.log('start new note');

        dispatch( savingNewNote() );

        /*
            Esto obtiene el ID de usuario (uid) del estado de autenticación (auth) almacenado en la tienda Redux.
            Suponiendo que getState().auth contiene información sobre la autenticación del usuario, como el ID de usuario, el nombre de usuario, etc., 
            esta línea extrae el ID de usuario para su uso posterior.
        */
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        /*
            doc: Es un método proporcionado por Firestore que se utiliza para obtener una referencia a un documento específico dentro de una colección en la base de datos Firestore.
            doc(collection(FirebaseDB, 'notas')).get() se utiliza para obtener todos los documentos dentro de la colección "notas" en la base de datos Firestore.

            setDoc es un método proporcionado por Firestore que se utiliza para crear o sobrescribir un documento en la base de datos Firestore con los datos proporcionados.
            Normalmente, se usa setDoc después de obtener una referencia al documento utilizando doc. Por ejemplo, setDoc(doc(collection(FirebaseDB, 'notas')).doc('documentoId')

            collection es un método proporcionado por Firestore que se utiliza para obtener una referencia a una colección específica en la base de datos Firestore.
            Al igual que doc, collection también toma la ruta de la colección que se desea obtener o crear.
            Por ejemplo, collection(FirebaseDB, 'notas') se utiliza para obtener la referencia a la colección 'notas' en la base de datos Firestore.

            FirebaseDB parece ser una instancia de Firestore que representa la conexión a la base de datos Firestore en tu aplicación.
            Esta instancia se utiliza para realizar operaciones de lectura y escritura en la base de datos Firestore, como obtener referencias a documentos y colecciones, crear nuevos documentos, etc.
        */
        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notas` ) );
        await setDoc( newDoc, newNote );

        //Se agrega la propiedad "id" al objeto "newNote"
        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
        
    }
}