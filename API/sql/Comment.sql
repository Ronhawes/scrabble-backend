
CREATE TABLE IF NOT EXISTS "Comment" (
  id SERIAL PRIMARY KEY,
  playerId INT NOT NULL,
  comment TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_player_comment FOREIGN KEY(playerId) REFERENCES Player(id) ON DELETE CASCADE
);
