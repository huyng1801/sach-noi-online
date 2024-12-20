import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const styles = {
  form: {
    width: '100%',
  },
  forgotPassword: {
    float: 'right',
  },
  submit: {
    width: '100%',
  },
  footer: {
    marginTop: 24,
    textAlign: 'center',
  },
};

const LoginForm = ({ onSubmit, loading }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    await onSubmit(values);
  };

  return (
    <Form
      form={form}
      name="login"
      onFinish={handleSubmit}
      style={styles.form}
      size="large"
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input 
          prefix={<UserOutlined />} 
          placeholder="Email" 
          autoComplete="email"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please enter your password' },
          { min: 6, message: 'Password must be at least 6 characters' },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          autoComplete="current-password"
        />
      </Form.Item>

      <Form.Item>
        <Link to="/forgot-password" style={styles.forgotPassword}>
          Forgot password?
        </Link>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={styles.submit}
        >
          Log in
        </Button>
      </Form.Item>

      <Divider />
      
      <div style={styles.footer}>
        <p>Don't have an account? Contact your administrator</p>
      </div>
    </Form>
  );
};

export default LoginForm;