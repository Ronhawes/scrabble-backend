const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getGames = async (req, res, next) => {
  try {
    const games = await prisma.game.findMany();
    if (games.length === 0) {
        throw {
          custom: true,
          message: "Games not found",
        }
      }
    return res.status(200).json(games);
  } catch (error) {
    
    next();
  }
};

module.exports = getGames;
