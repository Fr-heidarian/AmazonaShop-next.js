import Link from "next/link";

export default function Menu() {
  return (
    <ul className="flex items-stretch gap-5">
      <li>
        <Link
          href={"/cart"}
          className="bg-grayBgColor p-4 text-white rounded-lg hover:bg-grayHoverColor"
        >
          Cart
        </Link>
      </li>
      <li>
        <Link
          href={"/login"}
          className="bg-grayBgColor p-4 text-white rounded-lg hover:bg-grayHoverColor"
        >
          Login
        </Link>
      </li>
    </ul>
  );
}
