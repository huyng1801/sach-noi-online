import React from 'react';
import { Typography } from 'antd';
import AudioList from './AudioList';

const { Title } = Typography;

const AudioListSection = ({ audioList, currentAudioId, onSelect }) => {
  const styles = {
    container: {
      marginTop: '32px',
      padding: '16px',
      backgroundColor: '#fafafa',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    title: {
      marginBottom: '16px',
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>Danh sách tập</Title>
      <AudioList 
        audios={audioList}
        currentAudioId={currentAudioId}
        onSelect={onSelect}
      />
    </div>
  );
};

export default AudioListSection;
