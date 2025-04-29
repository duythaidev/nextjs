'use client';
import { useEffect } from 'react';
import { useColorScheme } from '@mui/material/styles';

export default function useTailwindDarkModeSync() {
  const { mode } = useColorScheme();

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);
}
