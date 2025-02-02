import React from "react";
import getCategories from "../lib/FetchCategories";
import SideBarMenu from "./SideBarMenu";

export default async function Sidebar() {
  const categories = await getCategories();
  const extractedData = categories.map(({ title, slug }) => ({ title, slug: `/categories/${slug}` }));

  return (
    <aside className="w-64 p-4 hidden lg:flex flex-col ">
      <SideBarMenu categories={extractedData} />
    </aside>
  );
}
