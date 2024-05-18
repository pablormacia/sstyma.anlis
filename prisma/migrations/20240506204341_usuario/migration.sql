/*
  Warnings:

  - You are about to drop the column `apellido` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `domicilio` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "apellido",
DROP COLUMN "domicilio",
DROP COLUMN "email",
DROP COLUMN "nombre";
