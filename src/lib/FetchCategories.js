import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function getCategories() {
    const categories = await prisma.category.findMany({
     include: {
       games: true,
     }
    });
    return categories;
  }