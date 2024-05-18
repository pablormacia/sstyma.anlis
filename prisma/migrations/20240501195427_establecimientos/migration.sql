/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `establecimientos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "establecimientos_nombre_key" ON "establecimientos"("nombre");
