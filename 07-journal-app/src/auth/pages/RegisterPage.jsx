import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear Cuenta">  {/*Se coloca el layout que reemplaza la una parte de la pagina de registro y login y se le pasa la prop title para distinguir entre el login y registro  */}
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField
              label="Correo Electronico"
              type="email"
              placeholder="Correo"
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sx={{ mb: 2, mt: 1 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

        </Grid>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
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

