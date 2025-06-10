/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes.jsx'
import GlobalStyle from './styles/globalStyles.js'


createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </StrictMode>
)
