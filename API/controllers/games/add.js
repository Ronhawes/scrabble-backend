const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addGameplayed = async (req, res, next) => {
  try {
    const { id, ranks} = req.body;

    if (!id||!ranks) {
      return res.status(400).json({ message: "id and ranks are required" });
    }

    const newComment = await prisma.comment.create({
      data: {
        id,
        ranks,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return res.status(201).json({ message: " added successfully", comment: newComment });
  } catch (error) {
    next(error);
  }
};

module.exports = addGameplayed;
