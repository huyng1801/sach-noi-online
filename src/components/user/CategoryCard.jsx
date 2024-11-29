import React from 'react';
import { Card, Typography, Image } from 'antd';

const { Title } = Typography;

const CategoryCard = ({ title, image }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '10px',
    transition: 'transform 0.3s ease-in-out',
    minHeight: '300px',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    minHeight: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const titleStyle = {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <Card hoverable style={cardStyle} bodyStyle={{ padding: 0 }}>
      <div style={{height:'150px'}}>
      <Image src={image} alt={title} style={imageStyle} preview={false} />
      </div>
      <div style={{height:'50px'}}>
      <Title level={5} style={titleStyle}>
        {title}
      </Title>
      </div>
    </Card>
  );
};

export default CategoryCard;
