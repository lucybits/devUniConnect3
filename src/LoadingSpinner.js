import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LoadingSpinner = () => {
  const [randomMessage, setRandomMessage] = useState('');

  const messages = [
    'Cargando...',
    'Cargando... Dato curioso: ¡Los pulpos tienen tres corazones!',
    'Cargando... Dato curioso: Las hormigas duermen 8 minutos al día.',
    'Cargando... Dato curioso: Los pingüinos se enamoran para toda la vida.',
    'Cargando... Dato curioso: Las cebras tienen rayas únicas como nosotros tenemos huellas dactilares.',
    'Cargando... Dato curioso: Los elefantes son los únicos animales que no pueden saltar.',
    'Cargando... Dato curioso: Los flamencos rosados no nacen con ese color.',
    'Cargando... Dato curioso: Los gatos tienen cinco dedos en las patas delanteras y cuatro en las traseras.',
    'Cargando... Dato curioso: Las ovejas tienen memoria visual y pueden recordar caras durante años.',
    'Cargando... Dato curioso: Las orugas tienen más de 4,000 músculos.'
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      position="fixed"
      top="0"
      left="0"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      zIndex="1000"
    >
      <CircularProgress color="secondary" />
      <Typography variant="h6" color="textSecondary" mt={2} style={{ maxWidth: '500px', textAlign: 'center' }}>
        {randomMessage}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
