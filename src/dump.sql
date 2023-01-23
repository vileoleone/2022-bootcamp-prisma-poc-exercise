CREATE TABLE "piquete_num" (
	"id" serial PRIMARY KEY NOT NULL,
	"tamanho" int NOT NULL
);

CREATE TABLE "lote_gado" (
	"id" serial PRIMARY KEY NOT NULL,
	"tamanho" int NOT NULL,
	"piqueteId" int NOT NULL
);

CREATE TABLE "novilha" (
	"id" serial PRIMARY KEY NOT NULL,
	"peso" integer NOT NULL,
	"idade" int NOT NULL,
	"loteId" int NOT NULL
);

ALTER TABLE "lote_gado" ADD CONSTRAINT "lote_gado_fk0" FOREIGN KEY ("piqueteId") REFERENCES "piquete_num"("id");

ALTER TABLE "novilha" ADD CONSTRAINT "novilha_fk0" FOREIGN KEY ("loteId") REFERENCES "lote_gado"("id");




