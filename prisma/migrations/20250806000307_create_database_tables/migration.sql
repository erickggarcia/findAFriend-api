-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "ong_id" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "socialReason" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "city_id" TEXT NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ong_email_key" ON "Ong"("email");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ong_id_fkey" FOREIGN KEY ("ong_id") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ong" ADD CONSTRAINT "Ong_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE CASCADE ON UPDATE CASCADE;
