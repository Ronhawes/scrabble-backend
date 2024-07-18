const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getRanking = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: "ID is required",
      };
    }

    const ranking = await prisma.ranking.findUnique({
      where: { id: parsedId(id) },
    });

    if (!ranking) {
      throw {
        custom: true,
        message: "Ranking not found",
      };
    }

    return res.status(200).json(ranking);
  } catch (error) {
    next(error);
  }
};

module.exports = getRanking;
