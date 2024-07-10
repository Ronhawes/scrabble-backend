const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addLevel = async (req, res, next) => {
  try {
    const { name, difficulty } = req.body;

    if (!name||!difficulty) {
      throw {
        custom: true,
        message: "name and difficulty are required",
      };
    }

    const newLevel = await prisma.level.create({
      data: {
        name,
       difficulty
      },
    });

    return res.status(201).json({ message: "Level added successfully", level: newLevel });
  } catch (error) {
    next(error);
  }
};

module.exports = addLevel;
