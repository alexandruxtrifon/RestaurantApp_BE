DROP TABLE Tencuiala;
GO
DROP TABLE Descriere;
GO

CREATE TABLE Tencuiala (
Cod_Tencuiala INT IDENTITY(1,1) PRIMARY KEY,
Nume VARCHAR(255) NOT NULL
);
GO

CREATE TABLE Descriere (
Cod_Descriere INT IDENTITY(1,1) PRIMARY KEY,
Cod_Tencuiala INT,
Descriere TEXT,
FOREIGN KEY (Cod_Tencuiala) REFERENCES Tencuiala(Cod_Tencuiala) ON DELETE CASCADE
);
GO

CREATE TABLE Retete (
Cod_Retete INT IDENTITY(1,1) PRIMARY KEY,
Cod_Tencuiala INT,
Reteta TEXT,
FOREIGN KEY (Cod_Tencuiala) REFERENCES Tencuiala(Cod_Tencuiala) ON DELETE CASCADE
);
GO

CREATE TABLE Tehnica(
Cod_Tehnica INT IDENTITY(1,1) PRIMARY KEY,
Cod_Tencuiala INT,
TEHNICA TEXT,
FOREIGN KEY (Cod_Tencuiala) REFERENCES Tencuiala(Cod_Tencuiala) ON DELETE CASCADE
);
GO

CREATE TABLE Texturi(
Cod_Texturi INT IDENTITY(1,1) PRIMARY KEY,
Cod_Tencuiala INT,
Detalii TEXT,
FOREIGN KEY (Cod_Tencuiala) REFERENCES Tencuiala(Cod_Tencuiala) ON DELETE CASCADE
);
GO

CREATE TABLE Degradare(
Cod_Degradare INT IDENTITY(1,1) PRIMARY KEY,
Cod_Tencuiala INT,
Degradari TEXT,
FOREIGN KEY (Cod_Tencuiala) REFERENCES Tencuiala(Cod_Tencuiala) ON DELETE CASCADE
);
GO