import React from "react";
import { Row, Col, Typography, Spin } from "antd";
import { useParams } from "react-router-dom";
import UserLayout from "../../components/user/layout/UserLayout";
import StoryHeader from "../../components/user/audio/StoryHeader";
import StoryInfo from "../../components/user/audio/StoryInfo";
import AudioPlayerSection from "../../components/user/audio/AudioPlayerSection";
import AudioListSection from "../../components/user/audio/AudioListSection";
import { useStoryDetail } from "../../hooks/useStoryDetail";

const { Title } = Typography;

const styles = {
  container: {
    padding: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
  },
  cover: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
  },
  info: {
    marginBottom: "24px",
  },
  audioPlayerSection: {
    margin: "32px 0",
    background: "#f5f5f5",
    borderRadius: "8px",
  },
  audioListSection: {
    marginTop: "32px",
  },
};

const StoryDetailPage = () => {
  const { storyId } = useParams();
  const {
    story,
    currentAudio,
    audioList,
    loading,
    handleAudioSelect,
    handleTimeUpdate,
    handleAudioEnd,
  } = useStoryDetail(storyId);

  if (loading) {
    return (
      <UserLayout>
        <div style={styles.loading}>
          <Spin size="large" tip="Loading story details..." />
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div style={styles.container}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <img
              src={story.coverImageUrl}
              alt={story.title}
              style={styles.cover}
            />
          </Col>

          <Col xs={24} md={16}>
            <div style={styles.header}>
              <StoryHeader title={story.title} />
            </div>
            <div style={styles.info}>
              <StoryInfo story={story} />
            </div>
            <div style={styles.audioPlayerSection}>
              <AudioPlayerSection
                currentAudio={currentAudio}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleAudioEnd}
              />
            </div>

            <div style={styles.audioListSection}>
              <AudioListSection
                audioList={audioList}
                currentAudioId={currentAudio?.id}
                onSelect={handleAudioSelect}
              />
            </div>
          </Col>
        </Row>
      </div>
    </UserLayout>
  );
};

export default StoryDetailPage;
