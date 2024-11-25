import React from 'react';
import { List, Avatar, Typography } from 'antd';

const { Text } = Typography;

const RecentComments = ({ comments }) => {
  return (
    <div style={{ width: '60%', margin: 'auto', marginTop: '30px', padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
      <Typography.Title level={4} style={{ marginBottom: '20px', textAlign: 'center' }}>
        Đánh Giá Gần Đây
      </Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={comment.avatar} />}
              title={<a href={comment.storyLink}>{comment.user}</a>}
              description={comment.text}
            />
            <div>
              <Text type="secondary">Rating: {comment.rating} ⭐</Text>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RecentComments;
