import React, { useState, useEffect } from 'react';
import { Button, Typography, IconButton, TextField, InputAdornment, Paper, List, ListItem, Snackbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MicrophoneIcon from '@mui/icons-material/Mic';
import VoiceSearch from './VoiceSearch'; 
import { styled } from '@mui/system';

const isSpeechRecognitionSupported = () => {
  return 'webkitSpeechRecognition' in window;
};

const ErrorMessage = ({ open, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message="Lo sentimos, esta función no es compatible con tu navegador"
    />
  );
};

const ErrorMessageContainer = styled('div')({
  position: 'absolute',
  top: '40px', 
  backgroundColor: '#333',
  color: '#FFF',
  borderRadius: '4px',
  padding: '8px 16px',
});

const SearchPopup = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [errorMessageOpen, setErrorMessageOpen] = useState(false);

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory((prevHistory) => [searchTerm, ...prevHistory]);
    }
  };

  const handleVoiceSearchResult = (voiceText) => {
    setSearchTerm(voiceText);
  };

  const handleCloseErrorMessage = () => {
    setErrorMessageOpen(false);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9998 }}></div>

        <Paper style={{ ...popupStyle, width: '900px', height: '500px', zIndex: 9999 }}>
          <IconButton style={closeButtonStyle} onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" style={{ ...titleStyle, fontFamily: 'Montserrat, sans-serif' }}>
            <span style={{ color: '#673AB7', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              Buscador
            </span>
          </Typography>

          <TextField
            variant="outlined"
            placeholder="Busca aquí"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {isSpeechRecognitionSupported() ? (
                    <VoiceSearch onVoiceSearchResult={handleVoiceSearchResult} />
                  ) : (
                    <IconButton disabled onClick={() => setErrorMessageOpen(true)}>
                      <MicrophoneIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
              inputProps: {
                style: {
                  color: 'black',
                  fontFamily: 'Montserrat, sans-serif',
                  borderColor: '#673AB7',
                  backgroundColor: 'transparent',
                  marginBottom: '0', 
                },
              },
              focused: {
                style: {
                  borderColor: '#673AB7',
                },
              },
            }}
            fullWidth
            style={searchInputStyle}
          />

          <Button
            variant="contained"
            color="primary"
            style={{ ...searchButtonStyle, fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', letterSpacing: '1px' }}
            onClick={handleSearch}
          >
            Buscar
          </Button>

          <div style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}></div>
          <div
            style={{
              background: '#DACCF6',
              borderRadius: '10px',
              padding: '10px',
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '1px',
                color: '#333',
                fontSize: '15px',
                margin: '0',
              }}
            >
              BÚSQUEDAS RECIENTES
            </Typography>
          </div>
          <List>
            {searchHistory.length > 0 ? (
              searchHistory.slice(0, 5).map((historyItem, index) => (
                <ListItem key={index}>{historyItem}</ListItem>
              ))
            ) : (
              <ListItem style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '14px' }}>
                No hay búsquedas recientes en este momento
              </ListItem>
            )}
          </List>

          <Typography
            variant="caption"
            color="textSecondary"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#666',
              fontSize: '10px'
            }}
          >
            El historial de búsqueda se guarda automáticamente.
          </Typography>
        </Paper>
      </div>
      <ErrorMessage open={errorMessageOpen} onClose={handleCloseErrorMessage} />
      {errorMessageOpen && (
        <ErrorMessageContainer>
          Lo sentimos, esta función no es compatible con tu navegador
        </ErrorMessageContainer>
      )}
    </>
  );
};

const popupStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#EDE7F6',
  padding: '20px',
  borderRadius: '10px',
  zIndex: 9999,
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: '#3F51B5',
};

const titleStyle = {
  marginBottom: '20px',
  color: '#3F51B5',
};

const searchInputStyle = {
  marginBottom: '20px',
};

const searchButtonStyle = {
  background: '#673AB7',
  color: '#FFF',
};

export default SearchPopup;
