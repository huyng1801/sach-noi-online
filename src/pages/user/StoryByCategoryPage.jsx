import React from 'react';
import { Typography, Row, Col, Spin } from 'antd';
import UserLayout from '../../components/user/layout/UserLayout';
import StoryCard from '../../components/user/StoryCard';
import { useStoryByCategory } from '../..//hooks/useStoryByCategory';
import './StoryByCategoryPage.css';

const { Title } = Typography;

const StoryByCategoryPage = () => {
  const { category, stories, loading } = useStoryByCategory();

  if (loading) {
    return (
      <UserLayout>
        <div className="story-list-loading">
          <Spin size="large" tip="Loading stories..." />
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="story-list-container">
        <div className="story-list-header">
          <Title level={2}>
            Truyện thể loại: {category?.categoryName}
          </Title>
          <span className="story-count">
            {stories.length} truyện
          </span>
        </div>

        <Row gutter={[16, 24]}>
          {stories.map(story => (
            <Col key={story.id} xs={12} sm={12} md={6} lg={6}>
             <StoryCard
              id={story.id}
              title={story.title}
              coverImageUrl={story.coverImageUrl}
              description={story.description}
              authorName={story.authorName}
              categoryName={story.categoryName}
              listenersCount={story.listenersCount}
              averageRating={story.averageRating}
              createdAt={story.createdAt}
            />
            </Col>
          ))}
        </Row>
      </div>
    </UserLayout>
  );
};

export default StoryByCategoryPage;