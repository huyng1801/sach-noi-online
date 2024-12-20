import React, { useState, useRef, useEffect } from 'react';
import { Button, Slider, Space, Tooltip } from 'antd';
import { 
  PlayCircleOutlined, 
  PauseCircleOutlined,
  RetweetOutlined,
} from '@ant-design/icons';
import './styles.css';

const AudioPlayer = ({ audio, onTimeUpdate, onEnded }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audio.audioFileUrl;
      audioRef.current.load();
      setPlaying(false);
      setCurrentTime(0);
      setSliderValue(0); 
    }
  }, [audio]);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleTimeChange = (value) => {
    const time = (value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
    setSliderValue(value);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setSliderValue((audioRef.current.currentTime / audioRef.current.duration) * 100);
    onTimeUpdate?.(audioRef.current.currentTime);
  };

  const skipTime = (seconds) => {
    const newTime = audioRef.current.currentTime + seconds;
    // Ensure the new time is within the audio duration (0 to max duration)
    if (newTime >= 0 && newTime <= audioRef.current.duration) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setSliderValue((newTime / audioRef.current.duration) * 100);
    }
  };

  const changePlaybackRate = (rate) => {
    audioRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    return date.toISOString().substr(14, 5); // Format time as MM:SS
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onEnded}
      />

      <div className="audio-controls">
        <Space size="middle">
          {/* Skip Backward 2m */}
          <Tooltip title="Lùi 2m">
            <Button onClick={() => skipTime(-120)} disabled={currentTime <= 120}>-2m</Button>
          </Tooltip>

          {/* Skip Backward 1m */}
          <Tooltip title="Lùi 1m">
            <Button onClick={() => skipTime(-60)} disabled={currentTime <= 60}>-1m</Button>
          </Tooltip>

          {/* Skip Backward 30s */}
          <Tooltip title="Lùi 30s">
            <Button onClick={() => skipTime(-30)} disabled={currentTime <= 30}>-30s</Button>
          </Tooltip>

          {/* Skip Backward 10s */}
          <Tooltip title="Lùi 10s">
            <Button onClick={() => skipTime(-10)} disabled={currentTime <= 10}>-10s</Button>
          </Tooltip>

          {/* Play/Pause Button */}
          <Button
            type="primary"
            shape="circle"
            icon={playing ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={togglePlay}
            size="large"
          />

          {/* Skip Forward 10s */}
          <Tooltip title="Tiến 10s">
            <Button onClick={() => skipTime(10)} disabled={currentTime >= audioRef.current?.duration - 10}>+10s</Button>
          </Tooltip>

          {/* Skip Forward 30s */}
          <Tooltip title="Tiến 30s">
            <Button onClick={() => skipTime(30)} disabled={currentTime >= audioRef.current?.duration - 30}>+30s</Button>
          </Tooltip>

          {/* Skip Forward 1m */}
          <Tooltip title="Tiến 1m">
            <Button onClick={() => skipTime(60)} disabled={currentTime >= audioRef.current?.duration - 60}>+1m</Button>
          </Tooltip>

          {/* Skip Forward 2m */}
          <Tooltip title="Tiến 2m">
            <Button onClick={() => skipTime(120)} disabled={currentTime >= audioRef.current?.duration - 120}>+2m</Button>
          </Tooltip>

          {/* Playback Speed */}
          <Tooltip title="Tốc độ">
            <Button
              icon={<RetweetOutlined />}
              onClick={() => {
                const rates = [0.5, 1, 1.5, 2];
                const nextIndex = (rates.indexOf(playbackRate) + 1) % rates.length;
                changePlaybackRate(rates[nextIndex]);
              }}
            >
              {playbackRate}x
            </Button>
          </Tooltip>
        </Space>
      </div>

      <div className="audio-progress">
        <span className="time-label">{formatTime(currentTime)}</span>
        <Slider
          value={sliderValue}
          onChange={handleTimeChange}
          className="progress-slider"
        />
        <span className="time-label">
          {formatTime(audioRef.current?.duration || 0)}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
