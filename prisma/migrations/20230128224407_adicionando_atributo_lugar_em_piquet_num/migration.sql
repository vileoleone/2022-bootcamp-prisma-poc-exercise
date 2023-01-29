/*
  Warnings:

  - Added the required column `lugar` to the `piquete_num` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "piquete_num" ADD COLUMN     "lugar" TEXT NOT NULL;
