import { BsFillPlayFill, BsPause } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js";
import styles from "./Waveform.module.css";

const Waveform = ({ audio }) => {
  const containerRef = useRef();
  const waveSurferRef = useRef({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      barWidth: 2,
      barHeight: 4,
      cursorWidth: 0,
      progressColor: "#41C6DA",
      waveColor: "#FAFAFAB8",
      height: 50,
    });
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });
    waveSurfer.on("pause", () => {
      toggleIsPlaying(false);
    });
    waveSurfer.on("finish", () => {
      toggleIsPlaying(true);
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <div className={styles.waveform}>
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
      >
        {isPlaying ? <BsPause /> : <BsFillPlayFill />}
      </button>
      <div className={styles.mainWave} ref={containerRef}></div>
    </div>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
};

export default Waveform;
