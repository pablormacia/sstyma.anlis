/*
  Warnings:

  - You are about to drop the column `matriz` on the `planAnualCustomData` table. All the data in the column will be lost.
  - You are about to drop the column `matriz` on the `planAnualData` table. All the data in the column will be lost.
  - Added the required column `year` to the `planAnualCustomData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planAnualCustomData" DROP COLUMN "matriz",
ADD COLUMN     "abril" BOOLEAN[],
ADD COLUMN     "agosto" BOOLEAN[],
ADD COLUMN     "diciembre" BOOLEAN[],
ADD COLUMN     "enero" BOOLEAN[],
ADD COLUMN     "febrero" BOOLEAN[],
ADD COLUMN     "julio" BOOLEAN[],
ADD COLUMN     "junio" BOOLEAN[],
ADD COLUMN     "marzo" BOOLEAN[],
ADD COLUMN     "mayo" BOOLEAN[],
ADD COLUMN     "noviembre" BOOLEAN[],
ADD COLUMN     "octubre" BOOLEAN[],
ADD COLUMN     "septiembre" BOOLEAN[],
ADD COLUMN     "year" INTEGER NOT NULL,
ALTER COLUMN "cumplimiento" DROP NOT NULL;

-- AlterTable
ALTER TABLE "planAnualData" DROP COLUMN "matriz",
ADD COLUMN     "abril" BOOLEAN[],
ADD COLUMN     "agosto" BOOLEAN[],
ADD COLUMN     "diciembre" BOOLEAN[],
ADD COLUMN     "enero" BOOLEAN[],
ADD COLUMN     "febrero" BOOLEAN[],
ADD COLUMN     "julio" BOOLEAN[],
ADD COLUMN     "junio" BOOLEAN[],
ADD COLUMN     "marzo" BOOLEAN[],
ADD COLUMN     "mayo" BOOLEAN[],
ADD COLUMN     "noviembre" BOOLEAN[],
ADD COLUMN     "octubre" BOOLEAN[],
ADD COLUMN     "septiembre" BOOLEAN[],
ALTER COLUMN "cumplimiento" DROP NOT NULL;
