import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideBarMenuList({items, title}) {
    const path = usePathname();
    console.log(path)
  return (
    <div>
      <h2 className="text-lg text-slate-500 font-bold">{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              key={item.slug}
              href={item.slug}
              className={`flex items-center gap-2 p-2 ${
                path === item.slug || path === `/categories/${item.slug}`
                  ? "bg-main"
                  : "text-accent hover:text-gray-400 transition-all ease-in"
              }`}
            >
              {" "}
              {item?.icon} {item.title} 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
