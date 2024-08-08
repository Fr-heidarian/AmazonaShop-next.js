import Link from "next/link";

export default function Menu() {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <Link href={"/cart"} className="btn btn-ghost text-xl">
          Cart
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
