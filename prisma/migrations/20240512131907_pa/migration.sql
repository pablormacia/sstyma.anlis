-- CreateEnum
CREATE TYPE "Cumplimiento" AS ENUM ('C', 'MC', 'PC', 'IN');

-- CreateTable
CREATE TABLE "planesAnualesCustom" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "default" BOOLEAN NOT NULL,
    "establecimientoId" INTEGER NOT NULL,

    CONSTRAINT "planesAnualesCustom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PAGP" (
    "id" SERIAL NOT NULL,
    "actividad" TEXT NOT NULL,
    "matriz" BOOLEAN[],
    "establecimientoId" INTEGER NOT NULL,
    "cumplimiento" "Cumplimiento" NOT NULL,

    CONSTRAINT "PAGP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planAnualCustom" (
    "id" SERIAL NOT NULL,
    "actividad" TEXT NOT NULL,
    "matriz" BOOLEAN[],
    "cumplimiento" "Cumplimiento" NOT NULL,
    "establecimientoId" INTEGER NOT NULL,
    "tipoId" INTEGER NOT NULL,

    CONSTRAINT "planAnualCustom_pkey" PRIMARY KEY ("id")
);
