const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteRanking = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: "Ranking ID is required",
      };
    }

    await prisma.ranking.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: "Ranking deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteRanking;
