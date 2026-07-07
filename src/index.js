import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const customToastStyle = {
  width: "400px",
};
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <ToastContainer position='top-center' toastStyle={customToastStyle} />
    </AppProvider>
  </React.StrictMode>
);
reportWebVitals();
