/*
  Warnings:

  - Added the required column `tipoProcesso` to the `Processos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Processos" (
    "idProcesso" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "detalhes" TEXT,
    "tipoProcesso" TEXT NOT NULL,
    "NomeAuxiliarProcesso" TEXT,
    "quantidadeProcessos" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Processos_idProcesso_fkey" FOREIGN KEY ("idProcesso") REFERENCES "Cliente" ("idClient") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Processos" ("idProcesso", "quantidadeProcessos") SELECT "idProcesso", "quantidadeProcessos" FROM "Processos";
DROP TABLE "Processos";
ALTER TABLE "new_Processos" RENAME TO "Processos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
