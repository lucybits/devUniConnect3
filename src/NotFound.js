import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';

const NotFound = () => {
    const containerStyle = {
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        padding: '2rem',
        color: '#A7A7A7',
        background: '#0A0E26', 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://img.freepik.com/free-vector/purple-abstract-background_1117-127.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
        fontFamily: 'Montserrat',
    };

    const headingStyle = {
        fontSize: '3em',
        marginBottom: '1rem',
        color: '#BB86FC', 
    };

    const descriptionStyle = {
        fontSize: '1.5em',
        marginBottom: '2rem',
        color: '#A7A7A7',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', 
    };

    const buttonStyle = {
        background: 'linear-gradient(135deg, #171158, #C93C63)', 
        color: '#FFF',
        borderRadius: '20px', 
        padding: '10px 25px', 
        marginBottom: '3rem',
        '&:hover': {
            background: 'linear-gradient(135deg, #00B4D8, #4A00E0)', 
        },
    };

    const dividerStyle = {
        width: '70%',
        height: '2px',
        backgroundImage: 'linear-gradient(to right, transparent, #6A6AFF, #FF6ABB, transparent)', 
        marginBottom: '4rem',
      };
        

    return (
        <Container maxWidth="x1" style={containerStyle}>
            <Typography variant="h1" style={{ ...headingStyle, fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                ¡Oops! Página no encontrada.
            </Typography>
            <Typography variant="body1" style={{ ...descriptionStyle, fontFamily: 'Montserrat' }}>
                La página que estás buscando no existe o ha sido movida.
            </Typography>
            <Button
                component={Link}
                to="/"
                variant="contained"
                style={{ ...buttonStyle, fontFamily: 'Montserrat' }}
            >
                Volver al inicio
            </Button>
            <div style={dividerStyle}></div>
            <Typography variant="h2" style={{ ...headingStyle, color: '#4345BC', fontFamily: 'Montserrat', fontWeight: 'bold' }}>
                ¿Qué puedes hacer?
            </Typography>
            <Typography variant="body1" style={{ ...descriptionStyle, color: '#A7A7A7', fontFamily: 'Montserrat' }}>
                - Intenta volver a la página anterior.
                <br />
                - Verifica que la URL esté escrita correctamente.
                <br />
                - Explora nuestra página de inicio para encontrar lo que buscas.
            </Typography>
        </Container>
    );
};

export default NotFound;
