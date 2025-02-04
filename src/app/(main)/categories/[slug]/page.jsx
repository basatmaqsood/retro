import ShowGames from "@//components/ShowGames";
import { getGamesByCategory } from "@//lib/FetchGame";
import _ from "lodash";

export default async function Page({ params }) {
  const slug = params.slug;
  const games = await getGamesByCategory(slug);
  const title = games[0]?.categories[0] ? games[0].categories[0].title : _.startCase(slug);


  return (
    <ShowGames games={games} title={title}  />
  );
}
