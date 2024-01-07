/*
  Warnings:

  - Added the required column `shortURLEPS` to the `vetor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortURLPNG` to the `vetor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortURLSVG` to the `vetor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vetor" (
    "ID_Vetor" TEXT NOT NULL PRIMARY KEY,
    "ID_Usuario" INTEGER NOT NULL,
    "Nome" TEXT NOT NULL,
    "URL_IMG" TEXT NOT NULL,
    "URL_SVG" TEXT NOT NULL,
    "URL_EPS" TEXT NOT NULL,
    "URL_PNG" TEXT NOT NULL,
    "shortURLSVG" TEXT NOT NULL,
    "shortURLEPS" TEXT NOT NULL,
    "shortURLPNG" TEXT NOT NULL,
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
