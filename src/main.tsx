import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

/*
  FOR IMAGES
  1. put in-app images in src/assets
  2. put title images or direct html images in public

  DEPLOY ACTIONS
  1. npm run predeploy
  2. npm run deploy
  3. wait a few minutes or reset page 'Cmd + Shift + R'
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
