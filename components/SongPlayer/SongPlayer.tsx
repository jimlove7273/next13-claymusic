import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useCurrentSong } from '@/store/songPlayStore';
import {
  IoIosAdd,
  IoIosRemove,
  IoMdPlay,
  IoMdPause,
  IoMdClose,
  IoMdVolumeHigh,
} from 'react-icons/io';

const SongPlayer = React.memo(
  ({ albumName, mp3url }: { albumName: string; mp3url: string }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const {
      volume,
      changeVolume,
      increaseVolume,
      decreaseVolume,
      progress,
      setProgress,
      currentSong,
      isPlaying,
      setIsPlaying,
      resetCurrentSong,
    } = useCurrentSong();

    const [duration, setDuration] = useState<number>();

    /**
     * function: handleTimeUpdcate
     *
     * This is the function that's handles when "timeupdate" event is fired when currentTime attribute is updated.
     * details: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event
     *
     */
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        const newProgress =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(newProgress);
      }
    };

    /**
     * function: handleVolumeChange
     *
     * This function handles volume change.  This is used on the input type='range' which adjusts the volume of the player
     * TODO: Continue check against using state: const [volume, changeVolume] = useState(30)
     *
     */
    const handleVolumeChange = (e: any) => {
      console.log('handleVolumeChange');
      const newVolume = Number(e.target.value);
      changeVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume / 100;
      }
    };

    /**
     * function: togglePlayPause
     *
     * This function toggles the audio's Play and Pause
     *
     */
    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
      }
    };

    /**
     * function: handleDecreaseVolume
     *
     * This is used when decrease volume button is clicked
     *
     */
    const handleDecreaseVolume = () => {
      console.log('decrease volume');
      decreaseVolume();
      if (audioRef.current) {
        audioRef.current.volume = volume / 100;
      }
    };

    /**
     * function: handleIncreaseVolume
     *
     * This is used when increase volume button is clicked
     */
    const handleIncreaseVolume = () => {
      console.log('increase volume');
      increaseVolume();
      if (audioRef.current) {
        audioRef.current.volume = volume / 100;
      }
    };

    /**
     * function: formatDuration
     *
     * This function converts the length of the audio file from xx.xxxx to mm:ss format
     *
     */
    function formatDuration(duration: number) {
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');
      return `${formattedMinutes}:${formattedSeconds}`;
    }

    /**
     * a various set of functions to be called upon page load
     */
    useEffect(() => {
      audioRef.current = document.getElementById(
        'audio-player',
      ) as HTMLAudioElement;

      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      };

      if (audioRef.current) {
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener(
          'loadedmetadata',
          handleLoadedMetadata,
        );
        return () => {
          audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
        };
      }
    }, []);

    /**
     * when mp3 file is changed, the following function runs.
     */
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setDuration(audioRef.current.duration);
      }
      setIsPlaying(true);
    }, [mp3url]);

    //const memoizedVolume = useMemo(() => volume, [volume]);
    const memoizedProgress = useMemo(() => progress, [progress]);
    const memoizedCurrentSong = useMemo(() => currentSong, [currentSong]);
    const memoizedIsPlaying = useMemo(() => isPlaying, [isPlaying]);

    return (
      <>
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-30">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="pr-3 border-r border-gray-200">
                  <div
                    className="bg-gray-300 rounded-full p-3 flex justify-center items-center m-2"
                    onClick={togglePlayPause}
                  >
                    {memoizedIsPlaying ? <IoMdPause /> : <IoMdPlay />}
                  </div>
                </div>
                <div className="flex h-[60px] items-center pr-2 mr-2 space-x-1 pl-2 border-r border-gray-200">
                  <IoMdVolumeHigh size={20} />
                  <div className="flex space-x-2 items-center">
                    {/* <div
                      className="cursor-pointer"
                      onClick={handleDecreaseVolume}
                    >
                      <IoIosRemove size={25} />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={handleIncreaseVolume}
                    >
                      <IoIosAdd size={25} />
                    </div> */}
                    <input
                      type="range"
                      id="volume-control"
                      min="0"
                      max="100"
                      step={5}
                      value={volume}
                      onChange={handleVolumeChange}
                    />
                    <div className="w-6 text-[12px]">{volume}</div>
                  </div>
                </div>
                <div className="mr-4 flex items-center space-x-3">
                  <div className="w-64 h-2 bg-gray-300 ml-4">
                    <div
                      className="h-2 bg-blue-500"
                      style={{ width: `${memoizedProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-[13px]">
                    {formatDuration(duration ?? 0)}
                  </div>
                </div>
                <div className="ml-2 pl-4 border-l border-gray-200">
                  <div className="font-bold">{memoizedCurrentSong.title}</div>
                  <div className="text-xs text-gray-300">{albumName}</div>
                </div>
              </div>

              <div className="cursor-pointer" onClick={resetCurrentSong}>
                <IoMdClose size={25} />
              </div>
            </div>
          </div>
        </div>
        <audio id="audio-player" src={mp3url}></audio>
      </>
    );
  },
);

SongPlayer.displayName = 'SongPlayer';

export default SongPlayer;
