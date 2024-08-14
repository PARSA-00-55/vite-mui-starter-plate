import { Button, Menu, MenuItem } from "@mui/material";
import { PaletteRounded } from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { ThemeMode } from "../ThemeContext/types";

const ThemeSwitcher = () => {
  const buttonRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { themeMode, switchThemeMode } = useContext(ThemeContext);

  const handleOpen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleSwitchTheme = (mode) => {
    switchThemeMode(mode);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<PaletteRounded />}
        ref={buttonRef}
        onClick={handleOpen}
      >
        Switch Theme
      </Button>
      <Menu
        open={openMenu}
        anchorEl={buttonRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          selected={themeMode === ThemeMode.LIGHT}
          onClick={() => handleSwitchTheme(ThemeMode.LIGHT)}
        >
          LIGHT
        </MenuItem>
        <MenuItem
          selected={themeMode === ThemeMode.DARK}
          onClick={() => handleSwitchTheme(ThemeMode.DARK)}
        >
          DARK
        </MenuItem>
        <MenuItem
          selected={themeMode === ThemeMode.SYSTEM}
          onClick={() => handleSwitchTheme(ThemeMode.SYSTEM)}
        >
          SYSTEM
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ThemeSwitcher;
