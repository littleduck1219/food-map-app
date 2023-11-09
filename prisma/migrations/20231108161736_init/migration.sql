/*
  Warnings:

  - You are about to drop the column `categoty` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Store" DROP COLUMN "categoty",
ADD COLUMN     "category" TEXT;
