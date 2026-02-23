-- CreateEnum
CREATE TYPE "ReportReason" AS ENUM ('INAPPROPRIATE_LANGUAGE', 'HATE_SPEECH', 'SPAM', 'HARASSMENT', 'COPYRIGHT_VIOLATION', 'OTHER');

-- CreateTable
CREATE TABLE "PostcardReport" (
    "id" SERIAL NOT NULL,
    "postcardId" INTEGER NOT NULL,
    "reason" "ReportReason" NOT NULL,
    "details" TEXT,
    "status" "BugStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostcardReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostcardReport" ADD CONSTRAINT "PostcardReport_postcardId_fkey" FOREIGN KEY ("postcardId") REFERENCES "Postcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
