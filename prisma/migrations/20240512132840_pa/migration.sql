/*
  Warnings:

  - You are about to drop the column `default` on the `planesAnualesCustom` table. All the data in the column will be lost.
  - You are about to drop the `PAGP` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `planAnualCustom` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "planesAnualesCustom" DROP COLUMN "default";

-- DropTable
DROP TABLE "PAGP";

-- DropTable
DROP TABLE "planAnualCustom";

-- CreateTable
CREATE TABLE "planesAnuales" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "planesAnuales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planAnualData" (
    "id" SERIAL NOT NULL,
    "planAnualId" INTEGER NOT NULL,
    "actividad" TEXT NOT NULL,
    "matriz" BOOLEAN[],
    "establecimientoId" INTEGER NOT NULL,
    "cumplimiento" "Cumplimiento" NOT NULL,

    CONSTRAINT "planAnualData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planAnualCustomData" (
    "id" SERIAL NOT NULL,
    "planAnualCustomId" INTEGER NOT NULL,
    "actividad" TEXT NOT NULL,
    "matriz" BOOLEAN[],
    "cumplimiento" "Cumplimiento" NOT NULL,
    "establecimientoId" INTEGER NOT NULL,

    CONSTRAINT "planAnualCustomData_pkey" PRIMARY KEY ("id")
);
