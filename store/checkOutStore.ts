import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type addressInfo = {
  firstName: string;
  lastName: string;
  email?: string;
  company?: string;
  country: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  phone?: string;
};

export const initialBillingInfo: addressInfo = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  country: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipcode: '',
  phone: '',
};

type checkOutProps = {
  billingInfo: addressInfo;
  shippingInfo: addressInfo;
  enteredBilling: boolean | null;
  enteredShipping: boolean | null;
  checkoutStep: number;
  setStep: (checkoutStep: number) => void;
  setBilling: (billing: boolean) => void;
  setBillingInfo: (field: keyof addressInfo, info: any) => void;
  setShipping: (shipping: boolean) => void;
  setShippingInfo: (field: keyof addressInfo, info: any) => void;
  toggleBilling: () => void;
  toggleShipping: () => void;
};

export const useCheckout = create<checkOutProps>()(
  persist(
    (set, get) => ({
      billingInfo: initialBillingInfo,
      shippingInfo: initialBillingInfo,
      enteredBilling: null,
      enteredShipping: null,
      checkoutStep: 0,
      setStep: (checkoutStep: number) => {
        set({ checkoutStep });
      },
      setBilling: (billing: boolean) => {
        set({ enteredBilling: billing });
      },
      setBillingInfo: (field, info) => {
        set((state) => ({
          billingInfo: {
            ...state.billingInfo,
            [field]: info,
          },
        }));
      },
      setShipping: (shipping: boolean) => {
        set({ enteredShipping: shipping });
      },
      setShippingInfo: (field, info) => {
        set((state) => ({
          shippingInfo: {
            ...state.shippingInfo,
            [field]: info,
          },
        }));
      },
      toggleBilling: () => {
        const enteredBilling = get().enteredBilling;
        set({ enteredBilling: !enteredBilling });
      },
      toggleShipping: () => {
        const enteredShipping = get().enteredShipping;
        set({ enteredShipping: !enteredShipping });
      },
    }),
    {
      name: 'checkout', // name of the item in the storage (must be unique)
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    },
  ),
);
