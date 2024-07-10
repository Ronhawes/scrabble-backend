const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addRanking = async (req, res, next) => {
  try {
    const { playerId, rank} = req.body;

    if (!playerId || !rank) {
      throw {
        custom: true,
        message: "playerId, rank, and score are required",
      };
    }

    const newRanking = await prisma.ranking.create({
      data: {
        playerId: parseInt(playerId),
        rank
      },
    });

    return res.status(201).json({ message: "Ranking added successfully", ranking: newRanking });
  } catch (error) {
    next(error);
  }
};

module.exports = addRanking;

