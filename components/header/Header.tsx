import Link from "next/link";
import SearchBox from "./SearchBox";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex justify-between p-3">
          <div className="flex items-center">
            <div className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
            <Link href={"/"} className="btn btn-ghost">
              AmazonShop
            </Link>
          </div>
          <SearchBox />
          <Menu />
        </div>
      </nav>
    </header>
  );
}
