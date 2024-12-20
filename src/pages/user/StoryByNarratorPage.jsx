import React from 'react';
import { Typography, Row, Col, Spin } from 'antd';
import UserLayout from '../../components/user/layout/UserLayout';
import StoryCard from '../../components/user/StoryCard';
import { useStoryByNarrator } from '../../hooks/useStoryByNarrator';
import './StoryByNarratorPage.css';

const { Title } = Typography;

const StoryByNarratorPage = () => {
  const { narrator, stories, loading } = useStoryByNarrator();

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
            Truyện đọc bởi: {narrator?.narratorName}
          </Title>
          <span className="story-count">
            {stories.length} truyện
          </span>
        </div>

        <Row gutter={[16, 24]}>
          {stories.map(story => (
            <Col key={story.id} xs={12} sm={12} md={8} lg={6}>
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

export default StoryByNarratorPage;