/*
  Warnings:

  - You are about to drop the column `state` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Ong` table. All the data in the column will be lost.
  - You are about to drop the column `socialReason` on the `Ong` table. All the data in the column will be lost.
  - Added the required column `state_id` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_reason` to the `Ong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `Ong` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'MEMBER');

-- AlterTable
ALTER TABLE "City" DROP COLUMN "state",
ADD COLUMN     "state_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ong" DROP COLUMN "phone_number",
DROP COLUMN "socialReason",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MEMBER',
ADD COLUMN     "social_reason" TEXT NOT NULL,
ADD COLUMN     "whatsapp" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "State" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "State"("id") ON DELETE CASCADE ON UPDATE CASCADE;
