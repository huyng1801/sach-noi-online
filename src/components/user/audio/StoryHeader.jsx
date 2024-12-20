import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const StoryHeader = ({ title }) => {
  return (
    <div className="story-header">
      <Title level={2}>{title}</Title>
    </div>
  );
};

export default StoryHeader;