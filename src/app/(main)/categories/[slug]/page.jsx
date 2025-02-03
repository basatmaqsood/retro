
import ShowGames from "@//components/ShowGames";
import { getGamesByCategory } from "@//lib/FetchGame";
import _ from 'lodash';


export default async function Page({ params }) {
    const slug = params.slug;
  const games = await getGamesByCategory(slug);

  return <ShowGames games={games} title={`${_.capitalize(slug)}`}/>;
}
