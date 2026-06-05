import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.college.createMany({
    data: [
      {
        name: "SRKR Engineering College",
        location: "Bhimavaram",
        fees: 85000,
        rating: 4.5,
        overview: "Top engineering college in Andhra Pradesh",
      },
      {
        name: "VIT AP",
        location: "Amaravati",
        fees: 180000,
        rating: 4.7,
        overview: "Private university with good placements",
      },
      {
        name: "JNTU Kakinada",
        location: "Kakinada",
        fees: 90000,
        rating: 4.3,
        overview: "State university with strong engineering programs",
      },
    ],
  });

  console.log("Seed data inserted");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });