/*
  Warnings:

  - The `abril` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `agosto` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `diciembre` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `enero` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `febrero` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `julio` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `junio` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `marzo` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `mayo` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `noviembre` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `octubre` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `septiembre` column on the `planAnualCustomData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "planAnualCustomData" DROP COLUMN "abril",
ADD COLUMN     "abril" INTEGER[],
DROP COLUMN "agosto",
ADD COLUMN     "agosto" INTEGER[],
DROP COLUMN "diciembre",
ADD COLUMN     "diciembre" INTEGER[],
DROP COLUMN "enero",
ADD COLUMN     "enero" INTEGER[],
DROP COLUMN "febrero",
ADD COLUMN     "febrero" INTEGER[],
DROP COLUMN "julio",
ADD COLUMN     "julio" INTEGER[],
DROP COLUMN "junio",
ADD COLUMN     "junio" INTEGER[],
DROP COLUMN "marzo",
ADD COLUMN     "marzo" INTEGER[],
DROP COLUMN "mayo",
ADD COLUMN     "mayo" INTEGER[],
DROP COLUMN "noviembre",
ADD COLUMN     "noviembre" INTEGER[],
DROP COLUMN "octubre",
ADD COLUMN     "octubre" INTEGER[],
DROP COLUMN "septiembre",
ADD COLUMN     "septiembre" INTEGER[];
