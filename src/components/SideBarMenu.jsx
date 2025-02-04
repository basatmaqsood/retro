"use client";
import { ClipboardPlus, Home, Info, Send } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import SideBarMenuList from "./SideBarMenuList";

export default function SideBarMenu({ categories }) {
  const path = usePathname();

  const mainMenuItems = [
    {
      title: "Home",
      icon: <Home />,
      slug: "/",
    },
    {
      title: "Latest Games",
      icon: <ClipboardPlus />,
      slug: "/new-games",
    },
    { title: "About", path: "/about", icon: <Info />, slug: "/about" },
    {
      title: "Contact",
      path: "/contact",
      icon: <Send />,
      slug: "/contact",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <SideBarMenuList items={mainMenuItems} title="Main Menu" />
      <SideBarMenuList items={categories} title="Categories" />
    </div>
  );
}
