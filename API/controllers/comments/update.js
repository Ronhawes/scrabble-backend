const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateComment = async (req, res, next) => {
  try {
    const { id, comment } = req.body; // Changed to req.body

    if (!id || !comment) {
      return res.status(400).json({ message: "ID and comment are required" });
    }

    const commentId = parseInt(id);

    // Check if the comment exists
    const existingComment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!existingComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: {
        comment,
        updated_at: new Date(),
      },
    });

    return res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = updateComment;
