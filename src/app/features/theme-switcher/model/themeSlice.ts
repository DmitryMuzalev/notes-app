import type { ThemeMode } from '@/shared/lib/theme/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  currentTheme: ThemeMode;
  resolvedTheme: 'dark' | 'light';
}

const getSystemTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('theme') as ThemeMode) || 'system';
  }
  return 'system';
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
  resolvedTheme:
    getInitialTheme() === 'system' ? getSystemTheme() : (getInitialTheme() as 'dark' | 'light'),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.currentTheme = action.payload;

      if (action.payload === 'system') {
        state.resolvedTheme = getSystemTheme();
      } else {
        state.resolvedTheme = action.payload;
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
      }
    },
    updateSystemTheme: state => {
      if (state.currentTheme === 'system') {
        state.resolvedTheme = getSystemTheme();
      }
    },
  },
});

export const { setTheme, updateSystemTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
