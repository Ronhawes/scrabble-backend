const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateGameplayed = async (req, res, next) => {
  try {
    const { id, playerid, score, levelid } = req.body;

    if (!id || !playerid || !score || !levelid) {
      throw {
        custom: true,
        message: "ID, playerid, score, and levelid are required",
      };
    }

    
    const updatedGamePlayed = await prisma.game.update({
      where: { id: parseInt(id) },
      data: {
        playerid,
        score,
        levelid,
      },
    });

    return res.status(200).json({ message: "Game updated successfully", updatedGamePlayed });
  } catch (error) {
    next(error);
  }
};

module.exports = updateGameplayed;
