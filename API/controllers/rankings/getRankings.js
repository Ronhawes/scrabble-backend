const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllRankings = async (req, res, next) => {
  try {
    const rankings = await prisma.ranking.findMany();
    if (rankings.length === 0) {
      throw {
        custom: true,
        message: "Rankings not found",
      };
    }
    return res.status(200).json(rankings);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllRankings;
