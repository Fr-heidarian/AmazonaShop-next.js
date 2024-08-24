"use client";
import useCartService from "@/lib/hooks/useCartStore";
import { OrderItem } from "@/lib/models/OrderModel";

type props = { item: OrderItem };

export default function AddToCart({ item }: props) {
  const { increase } = useCartService();
  return (
    <button
      className="btn bg-rose-500 text-white w-full font-semibold"
      onClick={() => increase(item)}
    >
      Add to Card
    </button>
  );
}
