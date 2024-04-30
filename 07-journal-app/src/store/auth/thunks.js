import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );  //Se pone el "status" del estado global en "checking"
        const result = await singInWithGoogle(); //Enviamos toda la informacion obtenida en "singInWithGoogle" a traves del dispatch
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) ); //Si el login da error va a mandar al logout con toda la data en null y el mensaje de error

        dispatch( login(result) )
    }
}