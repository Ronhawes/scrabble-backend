const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getGame = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: "ID is required"
      }
    }

    const gameId = parseInt(id); // Convert the id to an integer

    const game = await prisma.game.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw {
        custom: true,
        message: "Game not found",
      };
    }

    return res.status(200).json(game);
  
  } catch (error) {
    if (error.custom) {
      return res.status(400).json({ error: error.message });
    }
    next(error);
  }
};

module.exports = getGame;
