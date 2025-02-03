import ShowGames from "@//components/ShowGames";
import { getGamesByCategory, getLatestGames } from "@//lib/FetchGame";
import _ from "lodash";

export default async function Page() {
  const games = await getLatestGames();


  return (
    <ShowGames games={games} title="Latest Games :"  />
  );
}
