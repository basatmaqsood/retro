import Link from "next/link";
import React from "react";
import Search from "./Search";
import { ChartBarDecreasing, ClipboardPlus, House, Info, Send } from "lucide-react";

const menuLinks = [
  { name: "Home", path: "/", icon: <House />, slug: null },
  {
    name: "Categories",
    path: "/categories",
    icon: <ChartBarDecreasing />,
    slug: "categories",
  },
  { name: "About", path: "/about", icon: <Info />, slug: "about" },
  {
    name: "New Games",
    path: "/new-games",
    icon: <ClipboardPlus />,
    slug: "new-games",
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <Send />,
    slug: "contact",
  },
];

export default function MobileNav() {
  return (
    <nav>
      <div className="w-screen h-max bg-main shadow-lg flex flex-col items-center justify-center p-4 z-50000">
        <Search />
        <nav className="mt-4 w-full text-center">
          {menuLinks.map((link) => (
            <Link
              key={link.slug}
              href={link.path}
              className="block py-2 text-lg font-medium border-b mb-2"
            >
              <div className="flex gap-3 align-center pl-2 ">
                {link.icon}
                {link.name}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
}
