import React from 'react';
import { Card, Typography, Image } from 'antd';

const { Title, Text } = Typography;

const StoryCard = ({ title, image, category, rating, views }) => {
  return (
    <Card hoverable className="story-card">
      <Image src={image} alt={title} className="story-card-image" preview={false} />
      <Title level={4} className="story-card-title">{title}</Title>
      <Text type="secondary" className="story-card-category">{category}</Text>
      <div className="story-card-meta">
        <Text>Rating: {rating} ⭐</Text>
        <Text>{views} lượt xem</Text>
      </div>
    </Card>
  );
};

export default StoryCard;
