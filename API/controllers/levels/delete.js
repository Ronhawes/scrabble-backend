const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteLevel = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Level ID is required" });
    }

    // Check if the level exists
    const level = await prisma.level.findUnique({
      where: { id },
    });

    if (!level) {
      return res.status(404).json({ message: "Level not found" });
    }

    // Delete the level
    await prisma.level.delete({
      where: { id },
    });

    return res.status(200).json({ message: "Level deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteLevel;
