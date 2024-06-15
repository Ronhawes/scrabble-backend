const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getComment = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return res.status(400).json({ message: "ID must be a valid number" });
    }

    const comment = await prisma.comment.findUnique({
      where: { id: parsedId },
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    return res.status(200).json({ comment });
  } catch (error) {
    next(error);
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const comments = await prisma.comment.findMany();
    return res.status(200).json({ comments });
  } catch (error) {
    next(error);
  }
};

module.exports = { getComment, getAllComments };
