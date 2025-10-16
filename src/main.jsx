import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from './styles/globalStyles'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig'

import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/index'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer autoClose={2000} />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
