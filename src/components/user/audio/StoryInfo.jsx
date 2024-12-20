import React from 'react';
import { Space, Tag, Rate } from 'antd';
import { UserOutlined, BookOutlined, AudioOutlined } from '@ant-design/icons';

const StoryInfo = ({ story }) => {
  return (
    <div className="story-info">
      <Space direction="vertical" size="middle">
        <Space>
          <Tag icon={<BookOutlined />} color="blue">
            {story.categoryName}
          </Tag>
          <Tag icon={<UserOutlined />} color="green">
            {story.authorName}
          </Tag>
          <Tag icon={<AudioOutlined />} color="purple">
            {story.narratorName}
          </Tag>
        </Space>
        
        <Space>
          <Rate disabled defaultValue={story.averageRating} allowHalf />
          <span>({story.listenersCount} lượt nghe)</span>
        </Space>
      </Space>
    </div>
  );
};

export default StoryInfo;
