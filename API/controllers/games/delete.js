const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteGameplayed = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: " ID is required"
    };
    }

    await prisma.game.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: " deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteGameplayed;
