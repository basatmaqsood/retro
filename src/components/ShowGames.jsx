import Image from 'next/image'
import React from 'react'

export default function ShowGames({games, title}) {
  return (
        <div>
          <h1 className="font-display text-2xl md:text-3xl mb-4 ">
            {title}
          </h1>
          <div className="text-accent mb-4">{games.length} Results</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game) => (
              <a href={`/game/${game.slug}`} key={game.id}>
                <div
                  key={game.id}
                  className="bg-primary rounded-lg overflow-hidden border border-main shadow-sm hover:shadow-md flex flex-col justify-center"
                >
                  <Image
                    src={`/images/games/${game.image}`}
                    alt={game.title}
                    width={300}
                    height={200}
                    className="w-full aspect-video h-auto hover:scale-105 transition-all ease-in"
                  />
                  <div className="p-2">
                    <h2 className="text-xl font-semibold">{game.title}</h2>
                    <p className="text-accent">
                      {game.description.substring(0, 45)}...
                      {/* <a className="hover: text-gray-200" href={`/game/${game.slug}`}>Read More</a> */}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>  )
}
