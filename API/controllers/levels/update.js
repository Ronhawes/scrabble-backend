const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateLevel = async (req, res, next) => {
  try {
    const { id, name ,difficulity } =  req.body;

    if (!id) {
      throw{
        custom: true,
        message:"id is required "
      }
    }

    // Check if the level exists
    const updatedLevel = await prisma.level.update({
      where: { id: parseInt(id) },
      data:{
        name,
        difficulity
      }
    });

   

    return res.status(200).json({ message: "Level updated successfully", level: updatedLevel });
  } catch (error) {
    next(error);
  }
};

module.exports = updateLevel;
