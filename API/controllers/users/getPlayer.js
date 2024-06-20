const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPlayer = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw{
        custom: true,
        message: "ID is required"
      }
    }

  

    const player = await prisma.player.findUnique({
      where: { id: parseInt(id) },
    });

    if (!player) {
      throw{
        custom: true,
        message: "Player not found"
      }
    }

    return res.status(200).json(player);
  } catch (error) {
    next()
  }
};

module.exports = getPlayer;
