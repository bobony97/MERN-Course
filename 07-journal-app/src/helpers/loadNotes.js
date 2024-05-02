import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async( uid = '' ) => {
    if(!uid) throw new Error('El uid del usuario no existe.');

    const collectionRef = collection( FirebaseDB, `${uid}/journal/notas` );
    /*
        getDocs(): Es un método proporcionado por Firebase Firestore que se utiliza para obtener una colección completa de documentos de una colección específica en la base de datos Firestore. 
        Este método devuelve una promesa que se resuelve con una instancia de QuerySnapshot, que contiene todos los documentos de la colección que coinciden con la consulta.
    */
    const docs = await getDocs(collectionRef);

    const notes = [];
    docs.forEach((doc) => {
        notes.push({ id: doc.id, ...doc.data() })
    })

    return notes;
}