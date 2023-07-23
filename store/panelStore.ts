import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PanelState = {
  cartPanel: boolean;
  menuPanel: boolean;
  toggleCartPanel: () => void;
};

export const usePanelStore = create<PanelState>()(
  persist(
    (set, get) => ({
      cartPanel: false,
      menuPanel: false,
      toggleCartPanel: () => {
        set((state) => ({ cartPanel: !state.cartPanel }));
      },
      toggleMenuPanel: () => {
        set((state) => ({ menuPanel: !state.menuPanel }));
      },
    }),
    {
      name: 'panel', // name of the item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);
