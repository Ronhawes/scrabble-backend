const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    await prisma.comment.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteComment;
