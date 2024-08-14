import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AppDarkTheme, AppLightTheme } from "./theme";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { ThemeMode } from "./types";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(ThemeMode.LIGHT);
  const [theme, setTheme] = useState(AppLightTheme);

  const SYSTEM_THEME = useMediaQuery("(prefers-color-scheme: dark)")
    ? ThemeMode.DARK
    : ThemeMode.LIGHT;

  useEffect(() => {
    const themeModeFromPref = _getThemeModePref();
    setThemeMode(themeModeFromPref);
  }, []);

  useEffect(() => {
    switch (themeMode) {
      case ThemeMode.LIGHT:
        setTheme(AppLightTheme);
        break;
      case ThemeMode.DARK:
        setTheme(AppDarkTheme);
        break;
      case ThemeMode.SYSTEM:
        switch (SYSTEM_THEME) {
          case ThemeMode.LIGHT:
            setTheme(AppLightTheme);
            break;
          case ThemeMode.DARK:
            setTheme(AppDarkTheme);
            break;
        }
        break;
      default:
        setTheme(AppLightTheme);
        break;
    }
  }, [themeMode, SYSTEM_THEME]);

  const _getThemeModePref = () => {
    const themeModeFromPref = localStorage.getItem("themeMode");
    if (themeModeFromPref) {
      return ThemeMode[themeModeFromPref]; // Use the string key to access the ThemeMode constant
    }
    return ThemeMode.LIGHT;
  };

  const _setThemeModeToPref = (mode) => {
    const modeKey = Object.keys(ThemeMode).find(
      (key) => ThemeMode[key] === mode
    );
    if (modeKey) {
      localStorage.setItem("themeMode", modeKey);
    }
  };

  // const _setThemeModeToPref = (mode) => {
  //   localStorage.setItem("themeMode", mode);
  // };

  const switchThemeMode = (mode) => {
    setThemeMode(mode);
    _setThemeModeToPref(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
