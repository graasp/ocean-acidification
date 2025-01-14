/// <reference types="./src/env"/>
import react from '@vitejs/plugin-react';
import { UserConfigExport, defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }): UserConfigExport => {
  process.env = {
    VITE_VERSION: `${new Date().toISOString()}`,
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    base: '/graasp-app-ocean-acidification/',
    server: {
      port: parseInt(process.env.VITE_PORT ?? '4001', 10) || 4001,
      open: mode !== 'test', // open only when mode is different form test
    },
    build: {
      outDir: 'build',
    },
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      checker({
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./**/*.{ts,tsx}"',
        },
      }),
      react(),
    ],
  });
};
