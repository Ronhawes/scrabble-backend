
CREATE TABLE Level (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  difficulty VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);