DROP TABLE Retete;
GO
DROP TABLE Tehnica;
GO
DROP TABLE Texturi;
GO
DROP TABLE Degradare;
GO
DROP TABLE Descriere;
GO
DROP TABLE Tencuiala;
GO

CREATE TABLE Tencuiala (
Cod_Tencuiala INT IDENTITY(1,1) PRIMARY KEY,
Nume VARCHAR(255) NOT NULL
);
GO

INSERT INTO Tencuiala (Nume) VALUES ('Similipiatra');
INSERT INTO Tencuiala (Nume) VALUES ('Mozaic');
INSERT INTO Tencuiala (Nume) VALUES ('Terasit/ dolomit');
INSERT INTO Tencuiala (Nume) VALUES ('Tencuieli din praf de piatra');
SELECT * FROM Tencuiala;

CREATE TABLE Descriere (
Cod_Descriere INT IDENTITY(1,1) PRIMARY KEY,
Cod_Tencuiala INT,
Descriere TEXT,
FOREIGN KEY (Cod_Tencuiala) REFERENCES Tencuiala(Cod_Tencuiala) ON DELETE CASCADE
);
GO

INSERT INTO Descriere(Cod_Tencuiala, Descriere) VALUES (1, '
Similipiatra este o tencuială pe bază de ciment/var hidraulic și griș de 
piatră al cărei aspect, prin tratare, imită piatra naturală. Ea face parte din 
familia de tencuieli de ciment care au început să apară la începutul secolului XX în Europa, odată cu inventarea cimentului Portland și folosirea 
lui pe scară largă în construcții. 
În literatura de specialitate găsim variațiuni ale acestui material sub 
diferite denumiri: simili-pierre, pierre-simili, simili-marble sau pierre artificielle
în franceză, Betonwerkputz sau Steinputz în germană, pietra artificiale în 
italiană și, generic, artificial stone, în engleză. Toate definesc o tencuială 
care se dorea o alternativă mai ieftină pentru piatra naturală, dar cu mici 
diferențe în compoziție și în modul de aplicare sau de tratare. Se pare că 
nu există o rețetă universal acceptată pentru acest material și că fiecare 
regiune a adaptat rețetele și tehnicile la nevoile arhitecturale locale.
Acesta este și cazul României. Termenul pare să fi venit pe filieră 
franceză și definește o tencuială de ciment/var hidraulic cu griș de piatră 
mai dură ce putea fi tratată ulterior cu unelte specifice prelucrării pietrei. 
Este un material folosit pe scară largă în perioada interbelică, foarte des 
întâlnit la multe dintre soclurile clădirilor moderniste din București. În 
plus, utilizarea lui s-a extins și la clădirile în stil neoromânesc sau eclectic—socluri, ancadramente și uneori pe suprafața întregii fațade ca să 
creeze iluzia unei clădiri realizate integral din piatră—,fiind adaptat la 
elementele decorative locale.');


SELECT * FROM Descriere;
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