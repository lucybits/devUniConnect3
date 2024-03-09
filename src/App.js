import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import LoadingSpinner from './LoadingSpinner';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AboutSection from './AboutSection';
import ScrollButton from './ScrollButton';
import SearchPopup from './SearchPopup';
import SearchIcon from '@mui/icons-material/Search';
import Login from './Login';
import Contact from './Contact';
import Communities from './Communities';
import CookiesPolicy from './CookiesPolicy';
import NotFound from './NotFound'; 
import './App.css';

const Navbar = ({ onSearchClick }) => {
  const navbarStyle = {
    background: 'linear-gradient(to right, #110D25, #342391)',
    boxShadow: 'none',
    position: 'fixed',
    width: '100%',
    height: '10%',
    top: 0,
    zIndex: 1000,
    transition: 'background 0.3s ease',
    opacity: 1,
  };

  const linkStyle = {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '12px',
    color: '#FFF',
    position: 'relative',
    marginRight: '20px',
    '&:hover': {
      color: '#D59DF7',
    },
  };

  const searchContainerStyle = {
    borderRadius: '50%',
    backgroundColor: '#5E3DCF',
    padding: '10px',
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer', 
  };

  const searchIconStyle = {
    fontSize: '20px',
    color: '#FFF',
  };

  return (

    <AppBar position="fixed" sx={navbarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat', fontWeight: 'bold', color: '#FFF' }}>
          Logo
        </Typography>
        <Button color="inherit" sx={linkStyle} component={Link} to="/">
          Inicio
          <span className="divider"></span>
        </Button>
        <Button color="inherit" sx={linkStyle} component={Link} to="/login">
          Iniciar sesión
          <span className="divider"></span>
        </Button>
        <Button color="inherit" sx={linkStyle} component={Link} to="/communities">
          Comunidades Universitarias
          <span className="divider"></span>
        </Button>
        <Button color="inherit" sx={linkStyle} component={Link} to="/contact">
          Contáctanos
          <span className="divider"></span>
        </Button>
        <div style={searchContainerStyle} onClick={onSearchClick}>
          <SearchIcon style={searchIconStyle} />
        </div>
      </Toolbar>
    </AppBar>
  );
};


const Header = () => {
  const backgroundSpring = useSpring({
    from: { opacity: 0, transform: 'scale(1.1)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  const headerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: -1,
    ...backgroundSpring,
    display: 'flex',
    background: 'linear-gradient(to right, #0A0518, #201D6C)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    bottom: '5em',
  };

  const titleStyle = {
    fontSize: '4em',
    fontWeight: 'bold',
    color: '#AFA1F3',
    marginBottom: '0.5em',
    textAlign: 'center',
  };

  const subTitleStyle = {
    fontFamily: 'Montserrat',
    fontSize: '1.65em',
    color: '#BFBFBF',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: 1.2,
    textAlign: 'center',
    marginTop: '10px'
  };

  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    top: '50%',
    left: '0',
    transform: 'translateY(25%)',
    zIndex: -2,
  };

  return (
    <animated.div style={headerStyle}>
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>
          Inspírate. Inspíranos.
        </h1>
        <p style={subTitleStyle}>
          Conecta con otros estudiantes universitarios, aprende y descubre en aulas virtuales de Sonora.
        </p>
      </div>
    </animated.div>
  );
};

const App = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const asyncLoad = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));
      setPageLoaded(true);
      setShowSpinner(false);
      setOpen(true);
    };

    asyncLoad();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {

      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSnackbarClose = () => setOpen(false);


  const buttonContainerStyle = {
    position: 'absolute',
    bottom: '12em',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const buttonStyle = {
    borderRadius: '10px',
    background: 'linear-gradient(to right, #1F2450, #481A5B)',
    color: '#D59DF7',
    padding: '15px 30px',
    fontFamily: 'Montserrat',
    fontSize: '1.20em',
    marginTop: '20px',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 3px 15px rgb(86, 83, 153)',
    },
  };

  const snackbarStyle = {
    position: 'fixed',
    top: '30em',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '680px',
    maxWidth: '100%',
  };

  const alertStyle = {
    background: '#120D1E',
    color: '#FFF',
    borderRadius: '15px',
    fontFamily: 'Montserrat',
    width: '680px',
    maxWidth: '90%',
  };

  const buttonAcceptStyle = {
    borderRadius: '10px',
    backgroundColor: '#900367',
    padding: '8px',
    right: '15px',
    top: '5px',
    fontFamily: 'Montserrat',
    '&:hover': {
      backgroundColor: '#6A094D',
    },
  };

  return (
    <Router>
      <div style={{ position: 'relative', height: '100vh' }}>
        {showSpinner && <LoadingSpinner />} 

        {pageLoaded && (
          <React.Fragment>
            <Navbar onSearchClick={() => setIsSearchOpen(true)} />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              <Route
                path="/"
                element={
                  <React.Fragment>
                    <Header />
                    <AboutSection />
                    <ScrollButton />
                    <div style={buttonContainerStyle}>
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" size="large" sx={buttonStyle}>
                          Comenzar
                        </Button>
                      </Link>
                    </div>
                  </React.Fragment>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>

            {isSearchOpen && <SearchPopup onClose={() => setIsSearchOpen(false)} />}

            <div style={{ bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} style={snackbarStyle}>
                <Alert onClose={() => setOpen(false)} severity="info" variant="filled" sx={alertStyle} action={
                  <Button color="inherit" size="small" onClick={() => setOpen(false)} sx={buttonAcceptStyle}>
                    Aceptar
                  </Button>
                }>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: '0', fontSize: '1em', marginBottom: '10px' }}>
                      Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando en nuestro sitio, aceptas el uso de cookies de acuerdo con nuestra política de cookies y privacidad.
                    </p>
                    <p style={{ margin: '0', fontSize: '0.8em' }}>
                      Puedes obtener más información en nuestra{' '}
                      <Link to="/cookies-policy" style={{ textDecoration: 'underline', color: '#FFF' }}>
                        política de cookies
                      </Link>
                    </p>
                  </div>
                </Alert>
              </Snackbar>
            </div>

            <div style={{ bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
              <Snackbar open={!isOnline} autoHideDuration={null} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={handleSnackbarClose}>
                <Alert severity="error" variant="filled" action={
                  <Button color="inherit" size="small" onClick={handleSnackbarClose} sx={{ fontFamily: 'Montserrat' }}>
                    Cerrar
                  </Button>
                } sx={{ fontFamily: 'Montserrat', background: '#ff3333' }}>
                  ¡Oops! Parece que no tienes conexión a Internet. Por favor, revisa tu conexión antes de seguir navegando.
                </Alert>
              </Snackbar>
            </div>
          </React.Fragment>
        )}

      </div>
    </Router>
  );
};

export default App;