import { PrismaClient } from "@prisma/client";
import exp from "constants";
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

export async function getGameBySlug(slug) {
  const game = await prisma.game.findFirst({
    where: {
      slug,
    },
    include: {
      categories: true,
    },
  });
  return game;
}

export async function getGamesByCategory(slug) {
  const games = await prisma.game.findMany({
    where: {
      categories: {
        some: {
          slug: slug,
        },
      },
    },
    include: {
      categories: true
    }
  });
  return games;
}



export async function getLatestGames() {
  const games = await prisma.game.findMany({
    orderBy: {
      created_at: 'desc', // Sorting by created_at in descending order
    },
    take: 10, // Limiting the results to 10 games
  });
  return games;
}

export async function getAllGames(){
  const games = await prisma.game.findMany();
  return games;
}
