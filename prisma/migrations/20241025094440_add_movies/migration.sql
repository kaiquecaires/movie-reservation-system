-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "posterImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie_genders" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "genderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movie_genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MovieGender" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_genders_movieId_genderId_key" ON "movie_genders"("movieId", "genderId");

-- CreateIndex
CREATE UNIQUE INDEX "_MovieGender_AB_unique" ON "_MovieGender"("A", "B");

-- CreateIndex
CREATE INDEX "_MovieGender_B_index" ON "_MovieGender"("B");

-- AddForeignKey
ALTER TABLE "movie_genders" ADD CONSTRAINT "movie_genders_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_genders" ADD CONSTRAINT "movie_genders_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieGender" ADD CONSTRAINT "_MovieGender_A_fkey" FOREIGN KEY ("A") REFERENCES "genders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieGender" ADD CONSTRAINT "_MovieGender_B_fkey" FOREIGN KEY ("B") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
