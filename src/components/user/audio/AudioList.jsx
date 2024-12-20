import React from 'react';
import { List } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

const styles = {
  list: {
    background: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  item: {
    padding: '12px 24px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  itemPlaying: {
    backgroundColor: '#e6f7ff',
  },
  itemContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  playIcon: {
    fontSize: '20px',
    color: '#1890ff',
  },
  playIconPlaying: {
    color: '#52c41a',
  },
  title: {
    fontSize: '16px',
  },
};

const AudioList = ({ audios, currentAudioId, onSelect }) => {
  return (
    <List
      style={styles.list}
      dataSource={audios}
      renderItem={(audio) => {
        const isPlaying = audio.id === currentAudioId;
        
        return (
          <List.Item
            style={{
              ...styles.item,
              ...(isPlaying && styles.itemPlaying),
            }}
            onClick={() => onSelect(audio)}
          >
            <div style={styles.itemContent}>
              {isPlaying ? (
                <PauseCircleOutlined style={{ ...styles.playIcon, ...styles.playIconPlaying }} />
              ) : (
                <PlayCircleOutlined style={styles.playIcon} />
              )}
              <span style={styles.title}>{audio.title}</span>
            </div>
          </List.Item>
        );
      }}
    />
  );
};

export default AudioList;