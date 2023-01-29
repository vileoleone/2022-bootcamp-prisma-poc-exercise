/*
  Warnings:

  - The primary key for the `novilha` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `novilha` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "novilha" DROP CONSTRAINT "novilha_pkey",
DROP COLUMN "id",
ADD COLUMN     "number" SERIAL NOT NULL,
ADD CONSTRAINT "novilha_pkey" PRIMARY KEY ("number");
