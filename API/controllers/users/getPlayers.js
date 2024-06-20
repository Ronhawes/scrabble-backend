const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllPlayers = async (req, res, next) => {
  try {
    const players = await prisma.player.findMany();
    if (players.length === 0) {
        throw{
            custom: true,
            message: "Player not found"
    }
}
    return res.status(200).json(players);
  } catch (error) {
    next()
  }
};

module.exports = getAllPlayers;
