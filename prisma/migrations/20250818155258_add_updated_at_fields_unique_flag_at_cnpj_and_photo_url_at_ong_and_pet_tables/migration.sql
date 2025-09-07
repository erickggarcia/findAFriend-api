/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `Ong` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `photo_url` to the `Ong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo_url` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ong" ADD COLUMN     "photo_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "photo_url" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ong_cnpj_key" ON "Ong"("cnpj");
