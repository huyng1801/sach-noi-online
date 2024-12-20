import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import StoryCard from './StoryCard';

const { Title } = Typography;

const StoryList = ({ title, stories }) => {
  const listStyle = {
    width: '80%',
    margin: 'auto',
    padding: '20px 0',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const buttonStyle = {
    background: 'transparent',
    border: '2px solid #1890ff',
    color: '#1890ff',
    borderRadius: '4px',
    padding: '5px 15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <div style={listStyle}>
      <div style={headerStyle}>
        <Title level={4} style={{ marginBottom: 20 }}>{title}</Title>
        <div>
          <Button style={buttonStyle}>Xem thêm</Button>
        </div>
      </div>

      {/* Adjust gutter for Row to ensure proper spacing */}
      <Row gutter={[16, 16]}>
        {stories.map((story, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <StoryCard
              id={story.id}
              title={story.title}
              coverImageUrl={story.coverImageUrl}
              description={story.description}
              authorName={story.authorName}
              categoryName={story.categoryName}
              listenersCount={story.listenersCount}
              averageRating={story.averageRating}
              createdAt={story.createdAt}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StoryList;
