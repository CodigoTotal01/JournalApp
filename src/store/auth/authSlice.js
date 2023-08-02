import { createSlice } from '@reduxjs/toolkit';
//Creacion del slice
export const authSlice = createSlice({
    name: 'auth',
    //Como lucira neustro Stado
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
        //checking, not-authenticated, authenticated
    },
    //Los reducers son funciones que modifican el estado
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid =payload.uid ;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage=null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            console.log(payload)
            state.errorMessage = payload;
        },
        checkingCredentials: (state, action) => {
            state.status = 'checking'
        },
    }
});


// Acciones especificas del reducer - actions creation 
export const { login, logout, checkingCredentials } = authSlice.actions;