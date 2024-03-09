import React, { useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Bienvenid@, estudiante</h2>
        <form className="login-form">
          <input type="text" placeholder="Inserta tu nombre de usuario" className="login-input" />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className="login-input"
            />
            <button type="button" onClick={togglePasswordVisibility} className="password-toggle-button">
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>
          <Button
            type="submit"
            variant="outlined"
            className="login-button"
            style={{ borderColor: '#B97FFE', color: '#D5C5FD' }}
          >
            Ingresar
          </Button>
        </form>
        <p className="login-info">¿No tienes una cuenta? <a href="#" className="login-link">Regístrate</a></p>
      </div>
      <div className="privacy-container">
        <p className="privacy-text">
          <span className="privacy-icon">🔒</span>
          Protegemos tus datos al momento de registrarte en UniConnect. Tus datos son importantes para nosotros y nos comprometemos a mantenerlos seguros :)
        </p>
      </div>
    </div>
  );
};

export default Login;