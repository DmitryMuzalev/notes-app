import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/store';
import type { ThemeMode } from './types';
import { setTheme, updateSystemTheme } from '@/app/features/theme-switcher/model';

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const { currentTheme, resolvedTheme } = useAppSelector(state => state.theme);

  const changeTheme = (theme: ThemeMode) => {
    dispatch(setTheme(theme));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = () => {
      dispatch(updateSystemTheme());
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [resolvedTheme, dispatch]);

  return {
    currentTheme,
    resolvedTheme,
    changeTheme,
  };
};
