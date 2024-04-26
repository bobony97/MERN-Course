import { types } from "../types/types";

//Este es el "Reducer que va a ejecutar el codigo segun la informacion enviada"

//Estado inicial con el atributo "logged" en false
const initialState = {
    logged: false,
}

//Este es el reducer
export const authReducer = (state = initialState, action) => { //"action" que evalúa el tipo de acción (action.type) para determinar cómo actualizar el estado en respuesta a esa acción.
    switch(action.type) {
        case types.login:
            /*
                En este caso, se devuelve un nuevo estado que se basa en el estado actual (...state) pero con las siguientes modificaciones:
                logged se establece en true, lo que indica que el usuario está autenticado.
                user se establece como el payload de la acción, que probablemente contenga los datos del usuario autenticado.
            */
            return {
                ...state,
                logged: true,
                user: action.payload
            };
            
        case types.logout:
            return {
                logged: false
            };

        default:
            return state;
    }
}