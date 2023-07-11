import { create } from 'zustand';

type cartProduct = {
  id: number;
  itemNumber: string;
  product: string;
  productType: 'CD' | 'SB' | 'MP3';
  quantity: number;
  price: number;
};

type cartItemsProps = {
  cart: cartProduct[];
  cartQty: number;
  cartItemCount: () => void;
  cartTotalAmount: number;
  cartAmount: () => void;
  addToCart: (product: cartProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void;
};

export const useCartStore = create<cartItemsProps>((set, get) => ({
  cart: [
    {
      id: 23,
      itemNumber: 'cd1',
      product: 'Dear Friend CD',
      productType: 'CD',
      quantity: 1,
      price: 10.99,
    },
    {
      id: 24,
      itemNumber: 'cd2',
      product: 'Footsteps CD',
      productType: 'CD',
      quantity: 2,
      price: 10.99,
    },
  ],
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
    let cartNumCount = cart.reduce((acc, item) => item.quantity + acc, 0);
    set({ cartQty: cartNumCount });
  },
  cartTotalAmount: 0,
  cartAmount: () => {
    const cart = get().cart;
    let cartTotal = cart.reduce(
      (acc, item) => item.quantity * item.price + acc,
      0,
    );
    set({ cartTotalAmount: cartTotal });
  },
}));
