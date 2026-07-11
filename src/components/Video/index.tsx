import { FC, useRef, useState, ChangeEvent } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import styles from "./style.module.less";

export interface MatchVideoProps {
    videoUrl: string;
    nextUrl: string;
    poster: string;
}

// 倍速可选项
const PLAYBACK_RATES = [0.5, 1, 1.5, 2];

const MatchVideo: FC<MatchVideoProps> = ({ videoUrl, poster }) => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);

    // 命令式播放：优先带声音，未交互被浏览器拦截时降级为静音，避免抛 NotAllowedError
    const play = () => {
        const el = playerRef.current;
        if (!el) return;
        el.play().catch(() => {
            setMuted(true);
            el.muted = true;
            el.play().catch(() => {});
        });
    };

    const pause = () => {
        playerRef.current?.pause();
    };

    // hover 预览：移入播放、移出暂停
    const handleMouseEnter = () => play();
    const handleMouseLeave = () => pause();

    const togglePlay = () => (playing ? pause() : play());
    const toggleMute = () => setMuted((prev) => !prev);

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setVolume(value);
        // 拖到 0 视为静音，拖离 0 则解除静音
        setMuted(value === 0);
    };

    const isMuted = muted || volume === 0;

    return (
        <div
            className={styles.video}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ReactPlayer
                ref={playerRef}
                src={videoUrl}
                poster={poster}
                volume={volume}
                muted={muted}
                playbackRate={playbackRate}
                width="320px"
                height="240px"
                playsInline
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
            />

            <div className={styles.controls}>
                <button
                    type="button"
                    className={styles.button}
                    onClick={togglePlay}
                    aria-label={playing ? "暂停" : "播放"}
                >
                    {playing ? <FaPause /> : <FaPlay />}
                </button>

                <button
                    type="button"
                    className={styles.button}
                    onClick={toggleMute}
                    aria-label={isMuted ? "取消静音" : "静音"}
                >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>

                <input
                    className={styles.volume}
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    aria-label="音量"
                />

                <select
                    className={styles.rate}
                    value={playbackRate}
                    onChange={(e) => setPlaybackRate(Number(e.target.value))}
                    aria-label="倍速"
                >
                    {PLAYBACK_RATES.map((rate) => (
                        <option key={rate} value={rate}>
                            {rate}x
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default MatchVideo;
