import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/providers/ThemeProvider';
import { AuthProvider } from './contexts/providers/AuthProvider';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
    <React.StrictMode>
      <ThemeProvider>
        <AuthProvider>
        <App/>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  
)
