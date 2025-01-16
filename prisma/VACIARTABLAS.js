const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Vaciamos todas las tablas en orden para evitar problemas de relaciones
  await prisma.planAnualCustomData.deleteMany({});
  await prisma.planAnualData.deleteMany({});
  await prisma.planesAnualesCustom.deleteMany({});
  await prisma.planesAnuales.deleteMany({});
  await prisma.years.deleteMany({});
  await prisma.establecimientos.deleteMany({});
  await prisma.usuarios.deleteMany({});
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });