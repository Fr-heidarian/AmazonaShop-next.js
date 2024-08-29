"use client";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";

export default function Menu() {
  const { totalCount } = useCartService();
  
  return (
    <ul className="flex items-center gap-3">
      <li>
        <Link href={"/cart"} className="btn btn-ghost text-xl">
          Cart
          {totalCount ? (
            <span className="text-sm bg-rose-300 p-1 rounded">
              {totalCount}
            </span>
          ) : (
            ""
          )}
        </Link>
      </li>
      <li>
        <Link href={"/login"} className="btn btn-ghost text-xl">
          Login
        </Link>
      </li>
    </ul>
  );
}
