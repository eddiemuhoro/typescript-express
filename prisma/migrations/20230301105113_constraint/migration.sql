-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL DEFAULT 'https://www.w3schools.com/howto/img_avatar.png',
    "phone" TEXT,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employer" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "secondName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL DEFAULT 'https://www.w3schools.com/howto/img_avatar.png',
    "phone" TEXT,

    CONSTRAINT "employer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "skills" TEXT[],
    "employerId" TEXT NOT NULL,
    "favoritedBy" TEXT,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bid" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "belongToEmployee" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "isSelected" BOOLEAN NOT NULL DEFAULT false,
    "belongToJob" TEXT NOT NULL,

    CONSTRAINT "bid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "receiver" TEXT NOT NULL,
    "bid" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employer_email_key" ON "employer"("email");

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_favoritedBy_fkey" FOREIGN KEY ("favoritedBy") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bid" ADD CONSTRAINT "bid_belongToEmployee_fkey" FOREIGN KEY ("belongToEmployee") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bid" ADD CONSTRAINT "bid_belongToJob_fkey" FOREIGN KEY ("belongToJob") REFERENCES "job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_bid_fkey" FOREIGN KEY ("bid") REFERENCES "bid"("id") ON DELETE CASCADE ON UPDATE CASCADE;
