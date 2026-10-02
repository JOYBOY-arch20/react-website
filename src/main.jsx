import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Menu from './menu.jsx'
import Recent from './recent.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Menu />
    <Recent />
  </StrictMode>,
);

