const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get a single level by ID
const getLevelById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Level ID is required" });
    }

    // Find the level by ID
    const level = await prisma.level.findUnique({
      where: { id },
    });

    if (!level) {
      return res.status(404).json({ message: "Level not found" });
    }

    return res.status(200).json({ level });
  } catch (error) {
    next(error);
  }
};

// Get all levels
const getAllLevels = async (req, res, next) => {
  try {
    // Retrieve all levels
    const levels = await prisma.level.findMany();

    return res.status(200).json({ levels });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLevelById, getAllLevels };
