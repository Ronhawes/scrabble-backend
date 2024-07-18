const prisma = require("../../prisma");

const updateRanking = async (req, res, next) => {
  try {
    const { id, playerid, scores, rank, } = req.body;

    if (!id || !playerid||!scores || !rank ) {
      throw {
        custom: true,
        message: "ID, playerId, rank are required",
      };
    }

    const updatedRanking = await prisma.ranking.update({
      where: { id: parseInt(id) },
      data: {
        playerid,
        scores,
        rank
      },
    });

    return res.status(200).json({ message: "Ranking updated successfully", ranking: updatedRanking });
  } catch (error) {
    next(error);
  }
};

module.exports = updateRanking;
