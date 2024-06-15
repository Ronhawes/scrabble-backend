/*
  Warnings:

  - The primary key for the `Level` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `playerId` on the `Level` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Level" DROP CONSTRAINT "Level_playerId_fkey";

-- AlterTable
ALTER TABLE "Level" DROP CONSTRAINT "Level_pkey",
DROP COLUMN "playerId",
ADD COLUMN     "Id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "Level_pkey" PRIMARY KEY ("Id");

-- AddForeignKey
ALTER TABLE "Level" ADD CONSTRAINT "Level_Id_fkey" FOREIGN KEY ("Id") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
