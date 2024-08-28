import { PrismaClient } from '@prisma/client';
import { cabins } from './data-cabins.js';

const prisma = new PrismaClient();
console.log(cabins);
async function main() {
  for (const newCabin of cabins) {
    await prisma.cabin.create({
      data: newCabin,
    });
  }

  console.log('Seeded cabins from JSON file');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
