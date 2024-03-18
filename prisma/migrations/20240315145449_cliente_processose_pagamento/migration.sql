-- CreateTable
CREATE TABLE "Cliente" (
    "idClient" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "telefone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Processos" (
    "idProcesso" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidadeProcessos" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Processos_idProcesso_fkey" FOREIGN KEY ("idProcesso") REFERENCES "Cliente" ("idClient") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "idPagamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pendencias" BOOLEAN NOT NULL,
    "formaDePagamento" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "parcelas" INTEGER NOT NULL,
    CONSTRAINT "Pagamento_idPagamento_fkey" FOREIGN KEY ("idPagamento") REFERENCES "Processos" ("idProcesso") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_rg_key" ON "Cliente"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_telefone_key" ON "Cliente"("telefone");
