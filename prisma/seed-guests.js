import { PrismaClient } from '@prisma/client';
import { guests } from './data-guests.js';

const prisma = new PrismaClient();
console.log(guests);
async function main() {
  for (const newGuest of guests) {
    await prisma.guest.create({
      data: newGuest,
    });
  }

  console.log('Seeded users from JSON file');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
