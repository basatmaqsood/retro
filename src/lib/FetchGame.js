import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getGames(q) {
    const games = await prisma.game.findMany({
      where: {
        title: {
          contains: q,
        },
      },
      take: 20,
    });
    return games;
  }

  
export async function getGamesFeatured() {
  const categories = await prisma.game.findMany({
    where: {
      featured: true,
    },
  });
  return categories;
}