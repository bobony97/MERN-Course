import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";
import { startLoadingNotes } from "../store/auth/journal/thunks";

export const useCheckAuth = () => {

    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      /*
        onAuthStateChanged: Es un método proporcionado por Firebase Authentication que se utiliza para registrar un observador de cambios en el estado de autenticación del usuario. 
        Este método permite que tu aplicación reaccione a eventos de inicio de sesión, cierre de sesión o cambios en la información del usuario de manera asincrónica.
      */
      onAuthStateChanged( FirebaseAuth, async(user) => {
        if(!user) return dispatch( logout() );
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
        dispatch(startLoadingNotes());
      } )
  
    }, []);

    return {
        status
    }
}
