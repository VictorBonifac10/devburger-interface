import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { Login } from './pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
  </StrictMode>,
)
