import React from 'react'
import insta from '../Imagenes/instagram.png';
import face from '../Imagenes/facebook.png';


export default function Footer() {
  return (
    <div>
         <footer>
        <div class="div-3">
          <img src={insta} alt="instagram" />
          <img src={face} alt="facebook" />
        </div>
        <p> 2024 Andres Stivens Cortes Ponce - Todos los derechos de autor</p>

      </footer>
    </div>
  )
}
