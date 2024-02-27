import { App } from './src/App';
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(<App />)