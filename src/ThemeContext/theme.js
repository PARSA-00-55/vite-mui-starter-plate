import { createTheme } from "@mui/material";

export const AppLightTheme = createTheme({
  palette: {
    background: {
      default: "rgb(243, 252, 255)",
      paper: "rgb(255, 255, 255)",
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(85, 85, 85)",
    },
  },
});

export const AppDarkTheme = createTheme({
  palette: {
    model: "dark",
    background: {
      default: "rgb(33, 37, 39)",
      paper: "rgb(41, 44, 49)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(170, 170, 170)",
    },
  },
});
