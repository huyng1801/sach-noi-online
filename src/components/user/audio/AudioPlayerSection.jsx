import React from 'react';
import AudioPlayer from './AudioPlayer';

const AudioPlayerSection = ({ currentAudio, onTimeUpdate, onEnded }) => {
  if (!currentAudio) return null;

  const styles = {
    container: {
      background: '#f5f5f5',
      borderRadius: '8px'
    },
  };

  return (
    <div style={styles.container}>
      <AudioPlayer
        audio={currentAudio}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
    </div>
  );
};

export default AudioPlayerSection;
