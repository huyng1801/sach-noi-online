import React from 'react';
import { Row, Col, Typography } from 'antd';
import StoryCard from './StoryCard';

import { Button } from 'antd';

import'./StoryList.css';

const { Title } = Typography;

const StoryList = ({ title, stories }) => {
  return (
    <div className="story-list" style={{ width: '80%', margin: 'auto', padding: '20px 0' }}>
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={4} style={{ marginBottom: 20 }}>{title}</Title>
        <div>
        <Button className="story-list-button-glass">Xem thêm</Button> 
        </div>
      </div>
      <Row gutter={[16, 16]} className="story-list-content">
        {stories.map((story, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={4}>
            <StoryCard
              title={story.title}
              image={story.image}
              category={story.category}
              rating={story.rating}
              views={story.views}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StoryList;
