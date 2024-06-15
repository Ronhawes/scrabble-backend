const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateGameplayed = async (req, res, next) => {
  try {
    const { id, ranks} = req.query;

    if (!id || !comment) {
      return res.status(400).json({ message: "ID and comment are required" });
    }

    const updatedGamePlayed = await prisma.game.update({
      where: { id: parseInt(id) },
      data: {
        id,
        ranks,
        updated_at: new Date()
      },
    });

    return res.status(200).json({ message: " updated successfully", comment: updatedComment });
  } catch (error) {
    next(error);
  }
};

module.exports = updateGameplayed;
