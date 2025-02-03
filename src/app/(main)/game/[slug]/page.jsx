import GameEmulator from "@//components/GameEmulator";
import { getGameBySlug } from "@//lib/FetchGame";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const game = await getGameBySlug(params.slug);
  console.log(game);

  if (!game) return notFound(); // Show a 404 page if the game isn't found

  return (
    <div>
      <nav className="rounded-md w-full mb-4">
        <ol className="list-reset flex ">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="mx-2 text-gray-500" >
            <span>/</span>
          </li>
          <li>
            <a href=''>{game.title}</a>
          </li>
        </ol>
      </nav>
      <GameEmulator game={game}/>
    </div>
  );
}