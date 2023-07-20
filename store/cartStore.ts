import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type cartProduct = {
  id: number;
  itemNumber: string;
  product: string | undefined;
  productType: 'CD' | 'SB' | 'MP3';
  quantity: number;
  price: number;
};

type cartItemsProps = {
  cart: cartProduct[];
  cartQty: number;
  cartCalculator: () => void;
  cartTotalAmount: number;
  addToCart: (product: cartProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void;
};

export const useCartStore = create<cartItemsProps>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: cartProduct) => {
        const cart = get().cart;
        const findProduct = cart.find(
          (p) => p.itemNumber === product.itemNumber,
        );
        if (findProduct) {
          findProduct.quantity! += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        set({ cart });
      },
      removeFromCart: (productId: number) => {
        set({ cart: get().cart.filter((product) => product.id !== productId) });
      },
      updateQuantity: (productId: number, action: 'increase' | 'decrease') => {
        const cart = get().cart;
        const findProduct = cart.find((p) => p.id === productId);
        if (findProduct) {
          if (action === 'decrease') {
            findProduct.quantity =
              findProduct.quantity! > 1
                ? findProduct.quantity! - 1
                : findProduct.quantity!;
          } else {
            findProduct.quantity! += 1;
          }
        }
        set({ cart });
      },
      cartQty: 0,
      cartTotalAmount: 0,
      cartCalculator: () => {
        const cart = get().cart;
        let cartTotal = cart.reduce(
          (acc, item) => item.quantity * item.price + acc,
          0,
        );
        let cartNumCount = cart.reduce((acc, item) => item.quantity + acc, 0);
        set({ cartQty: cartNumCount, cartTotalAmount: cartTotal });
      },
    }),
    {
      name: 'claymusic-store', // name of the item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);
