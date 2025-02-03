import ShowGames from "@//components/ShowGames";
import CategorySlider from "@//components/Sliders/CategorySlider";
import HeroSlider from "@//components/Sliders/HeroSlider";
import { getCategoriesAll } from "@//lib/FetchCategories";
import { getGamesFeatured } from "@//lib/FetchGame";

export default async function Home() {
  const categories = await getCategoriesAll();
  const featuredGames = await getGamesFeatured();
  return (
    <>
      <HeroSlider />
      <CategorySlider categories={categories} />
      {/* Show featured games here */}
      <ShowGames games={featuredGames} title="Featured Games" hideNav={true} />
    </>
  );
}
