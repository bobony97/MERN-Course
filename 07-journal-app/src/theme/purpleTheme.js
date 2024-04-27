import { createTheme } from "@mui/material"; //Se utiliza para crear temas personalizados.
import { red } from "@mui/material/colors"; //Importa la paleta de colores predefinida de Material-UI, específicamente el color rojo

export const purpleTheme = createTheme({
  palette: {//En el objeto del tema, palette se utiliza para definir la paleta de colores del tema
    primary: { //Aquí, estás especificando el color principal
      main: "#262254", //Dentro de cada color, main se utiliza para especificar el color principal que deseas utilizar
    },
    secondary: { //color secundario
      main: "#543884", //Dentro de cada color, main se utiliza para especificar el color principal que deseas utilizar
    },
    error: {
      //y color de error
      main: red.A400,  //Dentro de cada color, main se utiliza para especificar el color principal que deseas utilizar
    },
  },
});
