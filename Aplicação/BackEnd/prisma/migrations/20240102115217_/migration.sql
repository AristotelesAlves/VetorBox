-- CreateTable
CREATE TABLE "vetor" (
    "ID_Vetor" TEXT NOT NULL PRIMARY KEY,
    "ID_Categorias" INTEGER NOT NULL,
    "ID_Usuario" INTEGER NOT NULL,
    "Nome" TEXT NOT NULL,
    "URL_IMG" TEXT NOT NULL,
    "URL_SVG" TEXT NOT NULL,
    "URL_EPS" TEXT NOT NULL,
    "URL_PNG" TEXT NOT NULL,
    "Downloads" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL,
    "Update_at" DATETIME NOT NULL,
    CONSTRAINT "vetor_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Users" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vetor_ID_Categorias_fkey" FOREIGN KEY ("ID_Categorias") REFERENCES "Categorias" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categorias" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Users" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Passworld" TEXT NOT NULL
);
