import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getCategoriesMenu() {
  const categories = await prisma.category.findMany({
    include: {
      games: true,
    },
  });
  return categories;
}

export async function getCategoriesAll() {
  const categories = await prisma.category.findMany({});
  return categories;
}

