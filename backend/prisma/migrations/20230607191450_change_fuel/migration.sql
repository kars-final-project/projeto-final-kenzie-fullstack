/*
  Warnings:

  - The `fuel` column on the `advertisements` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "advertisements" DROP COLUMN "fuel",
ADD COLUMN     "fuel" "FuelType" NOT NULL DEFAULT 'GASOLINA';
