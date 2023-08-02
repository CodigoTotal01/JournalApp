import { signInWithGoogle, registerUserWithEmailPassword } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

//Acciones que podemos despachar que internamente tienen una tarea asincrona
export const chekingAuthentication = (email, password) => {
    return async(dispatch) => {
        
        dispatch(checkingCredentials())
    }
}
//Start para indicar que es una tarea asincrona 
export const startGoogleSignIn = () => {
    return async(dispatch) => {
    
        dispatch(checkingCredentials())
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        //eliminar propiedad de un objketo result.ok

        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
      
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }

}
