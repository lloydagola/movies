import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#FC0900',
        },
    },
    components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },   
  },
});

export default theme