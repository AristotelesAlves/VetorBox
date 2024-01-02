/*
  Warnings:

  - The primary key for the `Categorias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `Categorias` table. All the data in the column will be lost.
  - You are about to drop the column `ID_Categorias` on the `vetor` table. All the data in the column will be lost.
  - Added the required column `ID_Categoria` to the `Categorias` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_CategoriasToVetores" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoriasToVetores_A_fkey" FOREIGN KEY ("A") REFERENCES "Categorias" ("ID_Categoria") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoriasToVetores_B_fkey" FOREIGN KEY ("B") REFERENCES "vetor" ("ID_Vetor") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categorias" (
    "ID_Categoria" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL
);
INSERT INTO "new_Categorias" ("Nome") SELECT "Nome" FROM "Categorias";
DROP TABLE "Categorias";
ALTER TABLE "new_Categorias" RENAME TO "Categorias";
CREATE TABLE "new_vetor" (
    "ID_Vetor" TEXT NOT NULL PRIMARY KEY,
    "ID_Usuario" INTEGER NOT NULL,
    "Nome" TEXT NOT NULL,
    "URL_IMG" TEXT NOT NULL,
    "URL_SVG" TEXT NOT NULL,
    "URL_EPS" TEXT NOT NULL,
    "URL_PNG" TEXT NOT NULL,
    "Downloads" INTEGER NOT NULL,
    "create_at" DATETIME NOT NULL,
    "Update_at" DATETIME NOT NULL,
    CONSTRAINT "vetor_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Users" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_vetor" ("Downloads", "ID_Usuario", "ID_Vetor", "Nome", "URL_EPS", "URL_IMG", "URL_PNG", "URL_SVG", "Update_at", "create_at") SELECT "Downloads", "ID_Usuario", "ID_Vetor", "Nome", "URL_EPS", "URL_IMG", "URL_PNG", "URL_SVG", "Update_at", "create_at" FROM "vetor";
DROP TABLE "vetor";
ALTER TABLE "new_vetor" RENAME TO "vetor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriasToVetores_AB_unique" ON "_CategoriasToVetores"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriasToVetores_B_index" ON "_CategoriasToVetores"("B");
