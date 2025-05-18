-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

-- Données d'exemple
INSERT INTO users (name, email)
VALUES
  ('Alice', 'alice@example.com'),
  ('Bob',   'bob@example.com');

