import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


//La funcion dse encargade extender, asi que sobreescribiremos los colares 
export const purpleTheme = createTheme({
    palette:{
        primary: {
            main: "#262254"
        },
        secondary:{
            main: "#543884"
        },
        error: {
            main: red.A400
        }
    }
});