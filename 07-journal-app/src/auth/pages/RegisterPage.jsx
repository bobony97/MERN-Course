import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: '',
  password: '',
  displayName: ''
} 

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'La contraseña debe ser mayor a 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid,emailValid,
    passwordValid  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if(!isFormValid) return true;
    dispatch(startCreatingUserWithEmailPassword(formState));
  }


  return (
    <AuthLayout title="Crear Cuenta">  {/*Se coloca el layout que reemplaza la una parte de la pagina de registro y login y se le pasa la prop title para distinguir entre el login y registro  */}
      <form onSubmit={ onSubmit } >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error= { !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField
              label="Correo Electronico"
              type="email"
              placeholder="Correo"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>
          
          <Grid item xs={12} sx={{ mb: 2, mt: 1 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid>

        </Grid>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} display={ !!errorMessage ? '' : 'none' }>
              <Alert severity="error">
                {errorMessage}
              </Alert>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth disabled={ isCheckingAuthentication } >
              Crear Cuenta
            </Button>
          </Grid>

          {/*Este "Link" que se importa de "material" es de estilos, el "RouterLink" es el de react que esta sobrescrito con un apodo*/}
          <Grid container direction="row" justifyContent="end" sx={{ mt: 2 }}>
            <Typography sx={{ mr: 1}} >¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to={"/auth/login"}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

