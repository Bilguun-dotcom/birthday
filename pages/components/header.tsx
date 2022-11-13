import { RiHeartsFill } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <Link
        href="/"
        className="flex items-center flex-shrink-0 text-white mr-6"
      >
        <RiHeartsFill className="p-1" size={40} />
        <span className="font-semibold text-xl tracking-tight">
          Our secret base
        </span>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-gray-500 hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/reasons"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
          >
            Reasons
          </Link>
          <Link
            href="/propose"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
          >
            Propose picture
          </Link>
          <Link
            href="/video-player"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500"
          >
            +18
          </Link>
        </div>
      </div>
    </nav>
  );
}
