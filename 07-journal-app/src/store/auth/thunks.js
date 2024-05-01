import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if( !ok ) return dispatch( logout({ errorMessage }) )

        dispatch( login({ uid, displayName, email, photoURL }) )
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );

        const result = await loginWithEmailAndPassword({ email, password });
        console.log(result)
        if( !result.ok ) return dispatch( logout( result) )

        dispatch( login( result ) )
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(logout({ errorMessage: null }));
    }
}