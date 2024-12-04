import React from 'react';
import { List, Avatar, Typography } from 'antd';
import moment from 'moment'; 
import 'moment/locale/vi'; 

const { Text, Title } = Typography;

moment.locale('vi'); 

const RecentComments = ({ comments }) => {
  return (
    <div
      style={{
        width: '80%',
        margin: 'auto',
        marginTop: '30px',
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Title level={4} style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>
        Đánh Giá Gần Đây
      </Title>
      <List
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={comment.avatar || '/images/default-avatar.png'} />}
              title={
                <div>
                  <Text strong style={{ fontSize: '16px', color: '#d35400' }}>
                    {comment.storyTitle}
                  </Text>
                  <br />
                  <Text type="secondary">
                    bởi <span style={{ color: '#3498db' }}>{comment.user}</span> trong thể loại{' '}
                    <span style={{ color: '#8e44ad', fontWeight: 'bold' }}>{comment.genre}</span>
                  </Text>
                </div>
              }
              description={
                <div>
                  <Text>{comment.comment}</Text>
                  <br />
                  <Text type="secondary" style={{ fontSize: '12px' }}>
                    Đánh giá: {comment.rating} ⭐
                  </Text>
                </div>
              }
            />
            <div>
              <Text type="secondary" style={{ fontSize: '12px' }}>
                {moment(comment.date).format('DD [tháng] MM [năm] YYYY, HH:mm:ss')}
              </Text>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RecentComments;
