const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get a single level by ID
const getLevelById = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw{
        custom: true,
        message: "ID is required"
      }
    }
    
    const level = await prisma.level.findUnique({
      where: { id: parseInt(id) },
    });

    if (!level) {
      throw {
        custom: true,
        message: "level not found",
      };
    }

    return res.status(200).json({ level });
  
  } catch (error) {
    next(error);
  }
};

module.exports = getLevelById 