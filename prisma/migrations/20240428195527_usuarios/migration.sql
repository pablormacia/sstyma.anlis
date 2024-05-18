/*
  Warnings:

  - Added the required column `username` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuarios" ADD COLUMN     "username" TEXT NOT NULL;
