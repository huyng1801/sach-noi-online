import React from 'react';
import { Card, Typography, Image } from 'antd';
import'./StoryCard.css';

const { Title, Text } = Typography;

const StoryCard = ({ title, image, category, rating, views }) => {
  return (
    <Card hoverable className="story-card">
      <div style={{height:'200px', marginBottom:'10px'}}>
      <Image src={image} alt={title} className="story-card-image" preview={false} />
      </div>
      <div style={{marginTop: '20px'}}>
      <Title level={4} className="story-card-title" >{title}</Title>
      </div>
      <Text type="secondary" className="story-card-category">{category}</Text>
      <div className="story-card-meta">
        <Text>Rating: {rating}⭐</Text>
        <div>
        <Text>{views} view</Text>
        </div>
      </div>
    </Card>
  );
};

export default StoryCard;
