/*
  Warnings:

  - You are about to drop the `Establecimientos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Establecimientos";

-- DropTable
DROP TABLE "Usuarios";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "establecimientos" INTEGER[],
    "tel" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "lastAccess" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "establecimientos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "domicilio" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "cp" TEXT NOT NULL,
    "ciiu" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "art" TEXT NOT NULL,

    CONSTRAINT "establecimientos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");
