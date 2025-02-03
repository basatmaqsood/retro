import { getCategoriesAll } from "@//lib/FetchCategories";
import Image from "next/image";
import React from "react";



export default async function page() {
  const categories = await getCategoriesAll();
  return (
    <div>
      <h2 className="font-display text-xl mb-4">Categories :</h2>
      <div className="flex gap-6 gap-y-4 md:gap-y-8 flex-wrap justify-center items-center">
        {categories.map((category,i) => (
          <a href={`/categories/${category.slug}`} key={i} className="flex flex-col items-center gap-2">
            <Image src={`/images/category/${category.image}`} alt={category.title} width={250} height={200}/>
            <span key={category.id}>{category.title} ({category.games.length})</span>
          </a>
        ))}
      </div>
    </div>
  );
}
