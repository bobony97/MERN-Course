import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({ children }) => {
  return (
    //ThemeProvider es un componente proporcionado por Material-UI que permite aplicar un tema personalizado a toda la aplicación
    <ThemeProvider theme={ purpleTheme }> {/* El prop theme que se le pasa especifica el objeto de tema que contiene las configuraciones de colores, tipografía, espaciado y otros estilos utilizados en la aplicación.*/}
        <CssBaseline />{/*Es otro componente de Material-UI que se utiliza para establecer un estilo base consistente en toda la aplicación. Esto incluye la normalización de estilos CSS 
            y la configuración de márgenes y rellenos predeterminados para los elementos HTML. */}
        { children }
    </ThemeProvider>
  )
}
