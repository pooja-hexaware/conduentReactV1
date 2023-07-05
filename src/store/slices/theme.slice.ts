import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeOptions, PaletteMode } from '@mui/material';

type InitialState = {
  theme: ThemeOptions;
  layout: {
    drawerWidth: number;
    isDrawerOpen: boolean;
  };
};

const initialState: InitialState = {
  theme: {
    palette: {
      mode: 'dark',
    },
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  },
  layout: {
    drawerWidth: 240,
    isDrawerOpen: false,
  },
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleColorMode(state) {
      if (!state.theme.palette?.mode) return;
      if (state.theme.palette.mode === 'light')
        state.theme.palette.mode = 'dark';
      else state.theme.palette.mode = 'light';
    },
    setColorTheme(state, action: PayloadAction<PaletteMode>) {
      if (!state.theme.palette?.mode) return;
      state.theme.palette.mode = action.payload;
    },
    openDrawer(state) {
      state.layout.isDrawerOpen = true;
    },
    closeDrawer(state) {
      state.layout.isDrawerOpen = false;
    },
  },
});

export const { toggleColorMode, setColorTheme, openDrawer, closeDrawer } =
  themeSlice.actions;

export default themeSlice.reducer;
