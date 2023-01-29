/*
  Warnings:

  - You are about to drop the `public.lote_gado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `public.novilha` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `capim` to the `piquete_num` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "piquete_num" ADD COLUMN     "capim" TEXT NOT NULL;

-- DropTable
DROP TABLE "public.lote_gado";

-- DropTable
DROP TABLE "public.novilha";
