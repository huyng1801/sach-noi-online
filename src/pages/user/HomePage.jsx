import React from 'react';
import UserLayout from '../../layouts/UserLayout';
import { Button, Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <UserLayout>
      <div style={{ textAlign: 'center' }}>
        <Title level={1}>Welcome to Our Platform</Title>
        <Paragraph>
          This is a platform where you can explore various features and enjoy a seamless user experience. Start by signing up or logging in.
        </Paragraph>
        <Row justify="center" gutter={16}>
          <Col>
            <Button type="primary" size="large" href="/register">
              Register Now
            </Button>
          </Col>
          <Col>
            <Button type="default" size="large" href="/login">
              Login
            </Button>
          </Col>
        </Row>
      </div>
    </UserLayout>
  );
};

export default HomePage;
