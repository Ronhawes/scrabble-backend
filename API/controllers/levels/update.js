const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateLevel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Level ID is required" });
    }

    // Check if the level exists
    const existingLevel = await prisma.level.findUnique({
      where: { id },
    });

    if (!existingLevel) {
      return res.status(404).json({ message: "Level not found" });
    }

    // Update the level
    const updatedLevel = await prisma.level.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(), // Update the 'updated_at' timestamp
      },
    });

    return res.status(200).json({ message: "Level updated successfully", level: updatedLevel });
  } catch (error) {
    next(error);
  }
};

module.exports = updateLevel;
