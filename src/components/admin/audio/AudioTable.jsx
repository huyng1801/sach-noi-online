import React, { useState } from 'react';
import { Table, Space, Button, Popconfirm, Progress } from 'antd';
import { EditOutlined, DeleteOutlined, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { formatDate, formatDuration } from '../../../utils/formatters';

// Format time in HH:MM:SS
const formatTime = (timeInSeconds) => {
  const date = new Date(timeInSeconds * 1000); // Convert seconds to milliseconds
  return date.toISOString().substr(11, 8); // Extract HH:MM:SS format
};

const styles = {
  table: {
    background: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  },
  playButton: {
    marginRight: '8px',
  },
  progress: {
    width: '300px', // Adjusted the width of the progress bar
    marginLeft: '10px',
    cursor: 'pointer',
  },
  timeLabels: {
    fontSize: '12px',
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px', // Matching width of the progress bar
  },
  timeLabelItem: {
    textAlign: 'center', // Center align time labels
  },
};

const AudioTable = ({ audios, loading, pagination, onChange, onEdit, onDelete }) => {
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [audioProgress, setAudioProgress] = useState({});
  const [audioElement, setAudioElement] = useState(null);

  const handlePlayPause = (audio) => {
    const element = document.getElementById(`audio-${audio.id}`);
    if (element.paused) {
      element.play();
      setPlayingAudioId(audio.id);
      setAudioElement(element);
    } else {
      element.pause();
      setPlayingAudioId(null);
    }
  };

  const handleAudioProgress = (audioId, event) => {
    const { currentTime, duration } = event.target;
    setAudioProgress((prevState) => ({
      ...prevState,
      [audioId]: (currentTime / duration) * 100,
    }));
  };

  const handleProgressClick = (audioId, e) => {
    const { offsetX, target } = e;
    const newProgress = (offsetX / target.clientWidth) * 100;
    
    // Get the audio element
    const audioElement = document.getElementById(`audio-${audioId}`);
    
    // Ensure audioElement and its duration are valid
    if (audioElement && !isNaN(audioElement.duration) && audioElement.duration > 0) {
      const newTime = Math.round(audioElement.duration * newProgress) / 100; // Round the time to the nearest integer
      
      // Ensure newTime is a finite number before updating currentTime
      if (isFinite(newTime)) {
        audioElement.pause(); // Stop the audio playback immediately
        audioElement.currentTime = newTime; // Set the new time
        setAudioProgress((prevState) => ({
          ...prevState,
          [audioId]: newProgress,
        }));
      }
    }
  };

  const skipTime = (audioId, seconds) => {
    const audioElement = document.getElementById(`audio-${audioId}`);
    audioElement.currentTime += seconds;
  };

  const columns = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
      sorter: true,
      render: (text, record) => (
        <Space>
          <Button
            type="text"
            icon={playingAudioId === record.id ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            style={styles.playButton}
            onClick={() => handlePlayPause(record)}
          />
          {text}
          <audio
            id={`audio-${record.id}`}
            src={record.audioFileUrl}
            onTimeUpdate={(e) => handleAudioProgress(record.id, e)}
          />
          {playingAudioId === record.id && (
            <div>
              <Space direction="vertical" size="small" style={styles.timeLabels}>
                <div style={styles.timeLabelItem}>{formatTime(0)}</div> {/* Start time */}
                <div style={styles.timeLabelItem}>
                  {formatTime(audioProgress[record.id] ? (audioProgress[record.id] / 100) * record.duration : 0)} {/* Current time */}
                </div>
                <div style={styles.timeLabelItem}>{formatTime(record.duration)}</div> {/* End time */}
              </Space>
              <Progress
                style={styles.progress}
                percent={audioProgress[record.id] || 0}
                showInfo={false}
                strokeColor="blue"
                size="small"
                onClick={(e) => handleProgressClick(record.id, e)} // Click on progress bar to change time
              />
            </div>
          )}
        </Space>
      ),
    },
    {
      title: 'Câu chuyện',
      dataIndex: 'storyTitle',
      key: 'storyTitle',
      sorter: true,
    },
    {
      title: 'Thời gian',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration) => formatDuration(duration),
      sorter: true,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => formatDate(date),
      sorter: true,
    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
            ghost
          />
          <Popconfirm
            title="Xóa âm thanh"
            description="Bạn có chắc chắn muốn xóa âm thanh này?"
            onConfirm={() => onDelete(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              danger
              ghost
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      style={styles.table}
      columns={columns}
      dataSource={audios}
      rowKey="id"
      loading={loading}
      pagination={pagination}
      onChange={onChange}
    />
  );
};

export default AudioTable;
