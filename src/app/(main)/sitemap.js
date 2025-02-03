import { getAllGames } from "@//lib/FetchGame";

export default async function sitemap() {
  const games = await getAllGames();
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : 'https://nextrivals-basat.vercel.app';

  const items = games.map((game) => ({
    url: `${url}/games/${game.slug}`,
    lastModified: game.created_at.toISOString(), // Ensure the date is in ISO format
    changefreq: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: `${url}/`,
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 1,
    },

    ...items,
  ];
}
