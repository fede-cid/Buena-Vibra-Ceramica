import React from 'react';
import CatalogoStyles from './Catalogo.module.css';

function Catalogo() {
  const handleWhatsAppMessage = () => {
    const message = encodeURIComponent('Hola, buen día. Quisiera solicitar el catálogo por mayor.');
    const phoneNumber = '5491167879133';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  }

  return (
    <div className={CatalogoStyles.container}>
      ¡Solicita nuestro catálogo ahora haciendo click aquí! Encuentra nuestras increíbles opciones al por mayor y sorprende a tus clientes con productos de alta calidad. ¡No esperes más para hacer crecer tu negocio!
      <button className={CatalogoStyles.button} onClick={handleWhatsAppMessage}>Solicitar catálogo por WhatsApp</button>
    </div>
  );
}

export default Catalogo;