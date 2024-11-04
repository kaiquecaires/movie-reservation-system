/*
  Warnings:

  - You are about to drop the column `userId` on the `reservations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "reservations" DROP CONSTRAINT "reservations_userId_fkey";

-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "userId";
