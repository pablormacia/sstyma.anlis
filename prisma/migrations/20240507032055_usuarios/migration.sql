/*
  Warnings:

  - The values [usuario,administrador,observador] on the enum `Rol` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Rol_new" AS ENUM ('Usuario', 'Administrador', 'Observador');
ALTER TABLE "usuarios" ALTER COLUMN "rol" DROP DEFAULT;
ALTER TABLE "usuarios" ALTER COLUMN "rol" TYPE "Rol_new" USING ("rol"::text::"Rol_new");
ALTER TYPE "Rol" RENAME TO "Rol_old";
ALTER TYPE "Rol_new" RENAME TO "Rol";
DROP TYPE "Rol_old";
ALTER TABLE "usuarios" ALTER COLUMN "rol" SET DEFAULT 'Usuario';
COMMIT;

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "establecimientos" SET DATA TYPE TEXT[],
ALTER COLUMN "rol" SET DEFAULT 'Usuario';
