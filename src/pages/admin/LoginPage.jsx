import React from 'react';
import { Card } from 'antd';
import LoginForm from '../../components/admin/auth/LoginForm';
import { useLogin } from '../../hooks/useLogin';
import Logo from '../../components/admin/layout/Logo';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    padding: '24px 24px 0',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
  logoWrapper: {
    marginBottom: 32,
    textAlign: 'center',
  },
};

const LoginPage = () => {
  const { handleLogin, loading } = useLogin();

  return (
    <div style={styles.container}>
      <Card style={styles.card} bordered={false}>
        <div style={styles.logoWrapper}>
          <Logo collapsed={false} />
        </div>
        <LoginForm onSubmit={handleLogin} loading={loading} />
      </Card>
    </div>
  );
};

export default LoginPage;