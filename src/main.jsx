import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProviders from './providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <>
        <Toaster></Toaster>
        <RouterProvider router={router}></RouterProvider>
      </>
    </AuthProviders>
  </React.StrictMode>,
)
