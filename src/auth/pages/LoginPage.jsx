import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom' 
import { Google } from "@mui/icons-material"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks/useForm'
import { chekingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useMemo } from 'react'


export const LoginPage = () => {

  //obtener cualquier estado de neustro store
  const {status} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  //Definiendo inputs del formulario
  const {email, password, onInputChange} = useForm({
    email: 'codigototal@gmail.com',
    password: '123456',
  });

  const isAuthenticating = useMemo(() => 
      status === 'checking', [status]);
  

  const onSubmit = (event) => {
      event.preventDefault();
      dispatch(chekingAuthentication());
  }

  const onGoogleSignIn = () =>{
    console.log("google Sing")
    dispatch(startGoogleSignIn());

  }



  return (

    <AuthLayout title='Login'>
        {/* Formulario */}
        <form onSubmit={onSubmit}>
          {/* Inputs */}
          <Grid container >
            <Grid item xs={12} sx={{
              marginBottom: 2
            }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{
              marginBottom: 2
            }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password_Bro"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            {/* Botones */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button 
                disabled={isAuthenticating}
                type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button   disabled={isAuthenticating} onClick={onGoogleSignIn} variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            {/* Redireccion */}
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color='inherit' to="/auth/register">
                Crear una Cuenta
              </Link>

            </Grid>

          </Grid>
        </form>

        </AuthLayout>
  )
}
