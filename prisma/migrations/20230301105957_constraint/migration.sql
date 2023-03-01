-- DropForeignKey
ALTER TABLE "job" DROP CONSTRAINT "job_employerId_fkey";

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
