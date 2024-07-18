const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addRanking = async (req, res, next) => {
  try {
    const { playerid,scores,rank} = req.body;

    if (!playerid ||!scores|| !rank) {
      throw {
        custom: true,
        message: "playerId, rank, and score are required",
      };
    }

    const newRanking = await prisma.ranking.create({
      data: {
        playerid: parseInt(playerid),
        scores,
        rank
      },
    });

    return res.status(201).json({ message: "Ranking added successfully", ranking: newRanking });
  } catch (error) {
    next(error);
  }
};

module.exports = addRanking;

