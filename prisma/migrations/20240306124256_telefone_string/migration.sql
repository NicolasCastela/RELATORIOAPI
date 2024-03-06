-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);
INSERT INTO "new_Users" ("cpf", "email", "id", "nome", "senha", "telefone") SELECT "cpf", "email", "id", "nome", "senha", "telefone" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
CREATE UNIQUE INDEX "Users_cpf_key" ON "Users"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
