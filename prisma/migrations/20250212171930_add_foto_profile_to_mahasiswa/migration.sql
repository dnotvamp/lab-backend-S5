-- CreateEnum
CREATE TYPE "jenis_kelamin" AS ENUM ('L', 'P');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "nim" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kelas" TEXT NOT NULL,
    "jurusan" TEXT NOT NULL,
    "jenis_kelamin" "jenis_kelamin" NOT NULL,
    "foto_profile" TEXT,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "foto_profile" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
