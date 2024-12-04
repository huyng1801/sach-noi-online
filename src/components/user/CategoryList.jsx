import React from 'react';
import { Row, Col } from 'antd';
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories }) => {
  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '20px 0', 
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const colStyle = {
    flex: '0 1 calc(16.66% - 16px)', 
    maxWidth: 'calc(16.66% - 16px)',
    minHeight: '300px',
    marginBottom: '16px',
  };

  return (
    <div style={containerStyle}>
      <Row gutter={[16, 16]} style={rowStyle}>
        {categories.map((category, index) => (
          <Col key={index} style={colStyle}>
            <CategoryCard
              title={category.title}
              image={category.image}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryList;
