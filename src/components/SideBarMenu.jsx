"use client";
import { ClipboardPlus, Home } from "lucide-react";
import Link from "next/link";
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
      title: "New Games",
      icon: <ClipboardPlus />,
      slug: "/new-games",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <SideBarMenuList items={mainMenuItems} title="Main Menu"/>
      <SideBarMenuList items={categories} title="Categories" />
    </div>
  );
}
