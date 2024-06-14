const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updateComment = async (req, res, next) => {
  try {
    const { id, comment } = req.query;

    if (!id || !comment) {
      return res.status(400).json({ message: "ID and comment are required" });
    }

    const updatedComment = await prisma.comment.update({
      where: { id: parseInt(id) },
      data: {
        comment,
        updated_at: new Date(),
      },
    });

    return res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
  } catch (error) {
    next(error);
  }
};

module.exports = updateComment;
