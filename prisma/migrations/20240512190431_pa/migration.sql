/*
  Warnings:

  - Added the required column `year` to the `planAnualData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "planAnualData" ADD COLUMN     "year" INTEGER NOT NULL;
