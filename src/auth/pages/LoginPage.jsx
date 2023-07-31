import {Link as RouterLink} from 'react-router-dom' 
import { Google } from "@mui/icons-material"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
//sx  -style extended
//xs - port view - para pantallas - como boostrap
// primary.main configurado
// fullwhit se extiende todo el tamanio que tenga el padre

//Dar alias a las palarbas reservadas para evitar conflicto
export const LoginPage = () => {
  return (

    <AuthLayout title='Login'>
        {/* Formulario */}
        <form>
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
              />
            </Grid>

            {/* Botones */}
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
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
