import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );  //Se pone el "status" del estado global en "checking"
        const result = await singInWithGoogle(); //Enviamos toda la informacion obtenida en "singInWithGoogle" a traves del dispatch
        console.log({result})
    }
}