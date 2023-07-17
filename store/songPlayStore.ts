import { create } from 'zustand';

type songProps = {
  currentSong: { title: string; mp3url: string };
  setCurrentSong: (title: string, mp3url: string) => void;
  volume: number;
  changeVolume: (newVolume: number) => void;
  decreaseVolume: () => void;
  increaseVolume: () => void;
  progress: number;
  setProgress: (progress: number) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  resetCurrentSong: () => void;
};

export const useCurrentSong = create<songProps>((set, get) => ({
  currentSong: { title: '', mp3url: '' },
  volume: 40,
  progress: 0,
  isPlaying: false,

  setCurrentSong: (title: string, mp3url: string) => {
    set({ currentSong: { title, mp3url } });
  },
  resetCurrentSong: () => {
    set({ currentSong: { title: '', mp3url: '' } });
  },
  changeVolume: (newVolume: number) => {
    set({ volume: newVolume });
  },
  decreaseVolume: () => {
    set({ volume: get().volume - 5 < 0 ? 0 : get().volume - 5 });
  },
  increaseVolume: () => {
    set({ volume: get().volume + 5 > 100 ? 100 : get().volume + 5 });
  },
  setProgress: (progress: number) => {
    set({ progress });
  },
  setIsPlaying: (isPlaying: boolean) => {
    set({ isPlaying });
  },
}));
