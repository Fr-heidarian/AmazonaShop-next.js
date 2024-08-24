import { create } from "zustand";
import { persist } from "zustand/middleware";
import { OrderItem } from "../models/OrderModel";

type Cart = { items: OrderItem[]; totalPrice: number };

const initialState: Cart = { items: [], totalPrice: 0 };

export const cartStore = create<Cart>()(
  persist(() => initialState, { name: "cartStore" })
);

export default function useCartService() {
  const { items, totalPrice } = cartStore();

  return {
    items,
    totalPrice,
    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      const updatedCartItems = exist
        ? items.map((x) =>
            x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];

      const totalPrice = items.reduce((acc, x) => acc + x.price * x.qty, 0);
      cartStore.setState({ items: updatedCartItems, totalPrice });
    },

    decrease: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);

      if (!exist) return;

      const updatedCartItems =
        exist.qty === 1
          ? items.filter((x) => x.slug !== item.slug)
          : items.map((x) =>
              x.slug === item.slug ? { ...exist, qty: exist.qty - 1 } : x
            );

      const totalPrice = items.reduce((acc, x) => acc + x.price * x.qty, 0);
      cartStore.setState({ items: updatedCartItems, totalPrice });
    },
  };
}
