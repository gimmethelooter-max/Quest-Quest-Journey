import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export const useTheme = (initialTheme: ThemeMode = 'system') => {
  const [theme, setTheme] = useState<ThemeMode>(initialTheme);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effectiveTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme;

    setIsDark(effectiveTheme === 'dark');
    document.documentElement.setAttribute('data-theme', effectiveTheme);
  }, [theme]);

  return { theme, setTheme, isDark };
};
