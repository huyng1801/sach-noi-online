import React from 'react';

const styles = {
  container: {
    height: '64px',
    margin: '16px',
    background: 'rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    margin: 0,
  },
};

const Logo = ({ collapsed }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>
        {collapsed ? 'SN' : 'SachNoi'}
      </h1>
    </div>
  );
};

export default Logo;