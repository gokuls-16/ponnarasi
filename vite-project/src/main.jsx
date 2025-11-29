import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ProductProvider } from './data/products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <ProductProvider>
      <CartProvider>
      <App />
      </CartProvider>
      </ProductProvider>
   
    

  </StrictMode>,
)
