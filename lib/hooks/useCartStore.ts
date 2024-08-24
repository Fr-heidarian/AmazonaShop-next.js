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
}
