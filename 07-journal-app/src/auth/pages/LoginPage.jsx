import { Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material'

export const LoginPage = () => {
  return (
    <Grid //Es un componente de diseño que facilita la creación de diseños flexibles y responsivos utilizando una estructura de cuadrícula
      container //Indica que este componente es un contenedor Grid.
      spacing={0} //Define el espaciado entre los elementos hijos del Grid. En este caso cero píxeles.
      direction="column" //Configura la dirección de los elementos hijos como "columna"
      alignItems="center" //Centra verticalmente los elementos hijos dentro del Grid.
      justifyContent="center" //Centra horizontalmente los elementos hijos dentro del Grid
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} //La propiedad sx en Material-UI se utiliza para aplicar estilos personalizados a un componente de manera directa en línea
      //*minHeight: '100vh': Esta propiedad define la altura mínima del contenedor Grid como el 100% de la altura de la ventana
      //*backgroundColor: 'primary.main': Esta propiedad establece el color de fondo del contenedor Grid. En este caso, 'primary.main' hace referencia al color principal definido en el tema de Material-UI
      //*padding: 4: Esta propiedad establece el espacio de relleno dentro del contenedor Grid. El valor 4 representa un relleno de 4 píxeles en todas las direcciones
    >
      {/* La propiedad "item" en un componente "Grid" se utiliza para especificar que un elemento hijo del contenedor Grid debe tratarse como un elemento de cuadrícula individual dentro
       -de la cuadrícula creada por el componente  */}
      <Grid item 
        className='box-shadow'
        xs={ 3 } //Se utiliza para definir cómo un componente o elemento de la cuadrícula debe comportarse en pantallas pequeñas. 
                //Puedes usar valores numéricos del 1 al 12 para indicar cuántas columnas debe ocupar el componente en pantallas pequeñas
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant='h5' sx={{ mb: 1 }} >Login</Typography>

          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField 
                  label="Correo"
                  type='email'
                  placeholder='correo@google.com'
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{ mb: 2, mt: 1 }}>
                <TextField 
                  label="Contraseña"
                  type='password'
                  placeholder='Contraseña'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}> 
              <Grid item xs={12} sm={6} >
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} >
                <Button variant='contained' fullWidth>
                  <Google />
                    <Typography sx={{ ml: 1 }} >Google</Typography>
                </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end' >
                <Link component={ RouterLink } color='inherit' to={'/auth/register'} >
                  Crear una cuenta
                </Link>
              </Grid>

            </Grid>
          </form>
      </Grid>
    </Grid>
  )
}
