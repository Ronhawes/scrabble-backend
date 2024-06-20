const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const commentId = parseInt(id);
    console.log('ID:', commentId);

    const comment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await prisma.comment.delete({
      where: { id: commentId },
    });

    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteComment;
