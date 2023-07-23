import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type addressInfo = {
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

const initialBillingInfo = {
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
  enteredBilling: boolean;
  enteredShipping: boolean;
  toggleBilling: () => void;
  toggleShipping: () => void;
};

export const useCheckout = create<checkOutProps>()(
  persist(
    (set, get) => ({
      billingInfo: initialBillingInfo,
      shippingInfo: initialBillingInfo,
      enteredBilling: false,
      enteredShipping: false,
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
