import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import router from "./router"
import { RouterProvider } from 'react-router-dom';
import GlobalFonts from './GlobalFonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Reset /><GlobalFonts /><RouterProvider router={router} /></>);