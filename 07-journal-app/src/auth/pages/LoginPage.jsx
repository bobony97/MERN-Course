import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from 'react-redux'
import { startLoginWithEmailPassword, startGoogleSingIn } from "../../store/auth/thunks";
import { useMemo } from "react";

const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const { email, password, onInputChange } = useForm(formData);

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({email, password}))
  }

  const onGoogleSingIn = () => {
    dispatch(startGoogleSingIn());
  }

  return (
    <AuthLayout title="Login">  {/*Se coloca el layout que reemplaza la una parte de la pagina de registro y login y se le pasa la prop title para distinguir entre el login y registro  */}
      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster" > 
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={ onInputChange }
              value={ email }
            />
          </Grid>

          <Grid item xs={12} sx={{ mb: 2, mt: 1 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              onChange={ onInputChange }
              value={ password }
            />
          </Grid>
        </Grid>

        <Grid 
          container
          display={!!errorMessage ? '' : 'none'}
          sx={{ mt: 1, mb: 1 }}
        >
          <Grid
            item
            xs={ 12 } 
          >
            <Alert severity="error"> { errorMessage } </Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button disabled={ isAuthenticating } type="submit" variant="contained" fullWidth>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button disabled={ isAuthenticating } variant="contained" fullWidth onClick={ onGoogleSingIn }>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>

          {/*Este "Link" que se importa de "material" es de estilos, el "RouterLink" es el de react que esta sobrescrito con un apodo*/}
          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Link component={RouterLink} color="inherit" to={"/auth/register"}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
