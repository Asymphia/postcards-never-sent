/*
  Warnings:

  - Changed the type of `page` on the `BugReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Page" AS ENUM ('HOME', 'BROWSE_POSTCARDS', 'SINGLE_POSTCARD', 'CREATE_POSTCARD', 'ABOUT_US', 'CONTACT_US', 'TERMS_AND_CONDITIONS');

-- AlterTable
ALTER TABLE "BugReport" DROP COLUMN "page",
ADD COLUMN     "page" "Page" NOT NULL;
