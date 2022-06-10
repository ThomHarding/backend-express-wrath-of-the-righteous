-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS companions;

CREATE TABLE companions (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    alignment VARCHAR NOT NULL,
    class VARCHAR NOT NULL,
    chapter INT NOT NULL,
    pathlocked BOOLEAN
);

INSERT INTO companions (name, alignment, class, chapter, pathlocked) VALUES
  ('Camellia', 'Chaotic Evil', 'Shaman', 1, false),
  ('Seelah', 'Lawful Good', 'Paladin', 1, false),
  ('Lann', 'Lawful Neutral', 'Monk', 1, false),
  ('Wenduag', 'Neutral Evil', 'Fighter', 1, false),
  ('Ember', 'Neutral Good', 'Witch', 1, false),
  ('Arushalae', 'Chaotic Neutral', 'Ranger', 1, false),
  ('Woljif', 'Chaotic Neutral', 'Rogue', 1, false),
  ('Daeran', 'Neutral Evil', 'Oracle', 1, false),
  ('Sosiel', 'Neutral Good', 'Cleric', 2, false),
  ('Regill', 'Lawful Evil', 'Hellknight', 2, false),
  ('Nenio', 'Neutral', 'Wizard', 1, false),
  ('Greybor', 'Neutral', 'Slayer', 3, false),
  ('Aivu', 'Chaotic Good', 'Animal Companion', 4, false),
  ('Staunton Vhane', 'Lawful Evil', 'Warpriest', 3, true),
  ('Ciar', 'Lawful Evil', 'Cavalier', 3, true),
  ('Delamere', 'Lawful Evil', 'Slayer', 3, true),
  ('Queen Galfrey', 'Lawful Evil', 'Bard', 5, true),
  ('Kestoglyr', 'Lawful Evil', 'Slayer', 2, true)