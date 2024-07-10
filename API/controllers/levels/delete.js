const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteLevel = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: "Player ID is required",
      };
    }

    // Check if the level exists
    const level = await prisma.level.delete({
      where: { id:parseInt(id) },
    });

    

    return res.status(200).json({ message: "Level deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteLevel;
