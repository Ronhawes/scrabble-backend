const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getGameplayed = async (req, res, next) => {
  try {
    const games = await prisma.game.findMany();
    return res.status(200).json(games);
  } catch (error) {
    console.error("Error retrieving games:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getGame = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return res.status(400).json({ message: "ID must be a valid number" });
    }

    const game = await prisma.game.findUnique({
      where: { id: parsedId },
    });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    return res.status(200).json(game);
  } catch (error) {
    console.error("Error retrieving game:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getGameplayed, getGame };
