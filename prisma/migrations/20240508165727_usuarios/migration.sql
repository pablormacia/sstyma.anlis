/*
  Warnings:

  - The `establecimientos` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "establecimientos",
ADD COLUMN     "establecimientos" INTEGER[];
