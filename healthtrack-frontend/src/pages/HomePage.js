import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para navegação

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bem-vindo ao HealthTrack</h1>
      <p style={styles.subtitle}>
        Monitorize o seu bem-estar físico e mental de forma fácil e eficiente.
      </p>

      {/* Links para outras páginas */}
      <nav style={styles.nav}>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <span style={styles.separator}>|</span>
        <Link to="/register" style={styles.link}>
          Registo
        </Link>
      </nav>
    </div>
  );
};

// Estilos básicos (opcional, você pode usar CSS ou uma biblioteca como styled-components)
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  nav: {
    marginTop: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.1rem',
    margin: '0 10px',
  },
  separator: {
    color: '#ccc',
    margin: '0 10px',
  },
};

export default HomePage; // Exportação padrão