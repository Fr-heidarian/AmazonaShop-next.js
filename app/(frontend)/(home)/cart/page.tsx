"use client";

import AddToCart from "@/components/product/AddToCart";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

// export const metadata = { title: "Shopping Cart" };

export default function CartPage() {
  const { items, clear, totalCount, totalPrice } = useCartService();
  const router = useRouter();
  return (
    <div className="m-5">
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <div>
          Cart is empty
          <Link href={"/"} className="text-rose-400 text-xl">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 gap-4">
          <table className="table md:col-span-3">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Link href={`/products/${item.slug}`}>
                            <img src={item.image} alt={item.name} />
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Link href={`/products/${item.slug}`}>
                          <div className="font-bold">{item.name}</div>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <AddToCart item={item} />
                  </td>
                  <td>€ {item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="card bg-white rounded-lg border border-gray-100 shadow-xl p-5 ">
            <div className="card-body p-4">
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-lg font-semibold text-gray-800">
                  Subtotal ({totalCount})
                </h1>
                <h1 className="text-lg font-bold text-green-600">
                  € {totalPrice}
                </h1>
              </div>
              <button
                className="btn bg-rose-500 text-white font-semibold"
                onClick={() => router.push("/shipping")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => clear()}
        className="btn m-4 bg-red-700 text-white hover:bg-rose-500"
      >
        Clear Cart
      </button>
    </div>
  );
}
