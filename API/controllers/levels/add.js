const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addLevel = async (req, res, next) => {
  try {
    const { id, levels } = req.body;

    if (!id||levels) {
      return res.status(400).json({ message: "id is required" });
    }

    const newLevel = await prisma.level.create({
      data: {
        id,
        levels,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return res.status(201).json({ message: "Level added successfully", level: newLevel });
  } catch (error) {
    next(error);
  }
};

module.exports = addLevel;
