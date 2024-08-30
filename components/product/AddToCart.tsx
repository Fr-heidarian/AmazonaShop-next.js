"use client";
import useCartService from "@/lib/hooks/useCartStore";
import { OrderItem } from "@/lib/models/OrderModel";

type props = { item: OrderItem };

export default function AddToCart({ item }: props) {
  const { increase, decrease, items } = useCartService();
  const existItem = items.find((x) => x.slug === item.slug);
  return existItem ? (
    <div>
      <button onClick={() => decrease(item)}>-</button>
      <span className="px-2">{existItem.qty}</span>
      <button onClick={() => increase(item)}>+</button>
    </div>
  ) : (
    <button
      className="btn bg-gray-700 text-white w-full font-semibold"
      onClick={() => increase(item)}
    >
      Add to Card
    </button>
  );
}
