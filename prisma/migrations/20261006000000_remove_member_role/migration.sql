-- Users are now only system admins: members must not be promoted when the role column is dropped.
DELETE FROM "users" WHERE "role" = 'MEMBER';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role";

-- DropEnum
DROP TYPE "Role";
