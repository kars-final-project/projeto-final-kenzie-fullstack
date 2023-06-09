/*
  Warnings:

  - Changed the type of `fuel` on the `advertisements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "advertisements" DROP COLUMN "fuel",
ADD COLUMN     "fuel" TEXT NOT NULL;
