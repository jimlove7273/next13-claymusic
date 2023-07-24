import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PanelState = {
  cartPanel: boolean;
  toggleCartPanel: () => void;
};

export const usePanelStore = create<PanelState>()(
  persist(
    (set, get) => ({
      cartPanel: false,
      toggleCartPanel: () => {
        set((state) => ({ cartPanel: !state.cartPanel }));
      },
    }),
    {
      name: 'panel', // name of the item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);
