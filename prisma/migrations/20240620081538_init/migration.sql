/*
  Warnings:

  - You are about to drop the column `commentorId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_commentorId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "commentorId";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_id_fkey" FOREIGN KEY ("id") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
