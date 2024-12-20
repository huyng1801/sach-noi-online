import React from 'react';
import { Card, Typography, Image } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const { Title, Text } = Typography;

const StoryCard = ({ id, title, coverImageUrl, description, authorName, categoryName, listenersCount, averageRating, createdAt }) => {
  const cardStyle = {
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    height: 'auto',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const categoryStyle = {
    fontSize: '14px',
    color: 'gray',
    marginBottom: '10px',
  };

  const metaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#555',
    marginTop: '10px',
  };

  return (
    <Link to={`/story/${id}`} style={{ textDecoration: 'none' }}>
      <Card hoverable style={cardStyle}>
        <div>
          <Image src={coverImageUrl} alt={title} style={imageStyle} preview={false} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <Title level={4} style={titleStyle}>{title}</Title>
        </div>

        <div style={metaStyle}>
          <Text type="secondary" style={categoryStyle}>{categoryName}</Text>
          <Text>{averageRating}⭐</Text>
        </div>
      </Card>
    </Link>
  );
};

export default StoryCard;
