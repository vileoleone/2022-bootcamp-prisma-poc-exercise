-- CreateTable
CREATE TABLE "lote_gado" (
    "id" SERIAL NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "piqueteId" INTEGER NOT NULL,

    CONSTRAINT "lote_gado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "novilha" (
    "id" SERIAL NOT NULL,
    "peso" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "loteId" INTEGER NOT NULL,

    CONSTRAINT "novilha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "piquete_num" (
    "id" SERIAL NOT NULL,
    "tamanho" INTEGER NOT NULL,

    CONSTRAINT "piquete_num_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public.lote_gado" (
    "id" SERIAL NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "piqueteId" INTEGER NOT NULL,

    CONSTRAINT "lote_gado_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public.novilha" (
    "id" SERIAL NOT NULL,
    "peso" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "loteId" INTEGER NOT NULL,

    CONSTRAINT "novilha_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lote_gado" ADD CONSTRAINT "lote_gado_fk0" FOREIGN KEY ("piqueteId") REFERENCES "piquete_num"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "novilha" ADD CONSTRAINT "novilha_fk0" FOREIGN KEY ("loteId") REFERENCES "lote_gado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
