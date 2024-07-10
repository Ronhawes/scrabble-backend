const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllLevels = async (req, res, next) => {
  try {
    const levels = await prisma.level.findMany();
    if (levels.length === 0) {
      throw {
        custom: true,
        message: "Levels not found"
      };
    }
    return res.status(200).json(levels);
  } catch (error) {
    next();
  }
};

module.exports = getAllLevels;
