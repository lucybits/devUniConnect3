import React from 'react';

const CookiesPolicy = () => {
  return (
    <div style={pageStyle}>
      <img src="https://cdn-icons-png.flaticon.com/512/5473/5473487.png" alt="Icono de Cookies" style={imageStyle} />
      
      <div style={containerStyle}>
        <h2 style={titleStyle}>Política de Cookies</h2>
        <p style={paragraphStyle}>
          En UniConnect, conectamos con estudiantes de todas partes de Sonora, y para ello, usamos cookies. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Estas cookies nos ayudan a comprender cómo interactúas con UniConnect y nos permiten recordar tus preferencias.
        </p>
        <h3 style={subtitleStyle}>¿Qué son las cookies?</h3>
        <p style={paragraphStyle}>
          Las cookies son archivos de texto que contienen pequeñas cantidades de información que se descargan en tu dispositivo cuando visitas un sitio web. Estos archivos de texto permiten que el sitio web recuerde tus acciones y preferencias durante un período de tiempo, para que no tengas que volver a ingresarlas cada vez que visites el sitio o navegues de una página a otra.
        </p>
        <h3 style={subtitleStyle}>¿Cómo utilizamos las cookies?</h3>
        <p style={paragraphStyle}>
          Utilizamos cookies para diversos fines, incluyendo:
        </p>
        <ul style={listStyle}>
          <li>Mejorar la funcionalidad del sitio web UniConnect.</li>
          <li>Personalizar tu experiencia en UniConnect.</li>
          <li>Analizar el uso del sitio web y recopilar información estadística.</li>
          <li>Proporcionar publicidad personalizada.</li>
        </ul>
        <h3 style={subtitleStyle}>¿Cómo puedes gestionar las cookies?</h3>
        <p style={paragraphStyle}>
          Puedes controlar y administrar las cookies en tu navegador. La mayoría de los navegadores te permiten rechazar o aceptar cookies, así como eliminar las cookies que ya se han almacenado en tu dispositivo. Sin embargo, ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de ciertas partes de nuestro sitio web.
        </p>
      </div>
    </div>
  );
};

const pageStyle = {
  backgroundColor: '#0F0D2C',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const containerStyle = {
  maxWidth: '800px',
  padding: '30px',
  fontFamily: 'Montserrat, sans-serif',
  color: 'white',
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginTop: '3em',
};

const subtitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginTop: '30px',
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const listStyle = {
  fontSize: '18px',
  lineHeight: '1.6',
  marginBottom: '20px',
  paddingLeft: '20px',
  color: '#C7C7C7',
};

const imageStyle = {
  position: 'absolute',
  top: '20px',
  left: 0,
  opacity: '0.1', 
  zIndex: '1', 
  width: '600px', 
  height: 'auto', 
};

export default CookiesPolicy;
