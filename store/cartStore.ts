import { create } from 'zustand';

type cartProduct = {
  id: number;
  itemNumber: string;
  product: string;
  quantity: number;
  price: number;
};

type cartItemsProps = {
  cart: cartProduct[];
  cartQty: number;
  cartItemCount: () => void;
  addToCart: (product: cartProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void;
};

export const useCartStore = create<cartItemsProps>((set, get) => ({
  cart: [],
  addToCart: (product: cartProduct) => {
    const cart = get().cart;
    const findProduct = cart.find((p) => p.id === product.id);
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
  cartItemCount: () => {
    const cart = get().cart;
    set({ cartQty: cart.length });
  },
}));
