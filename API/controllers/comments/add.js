const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addComment = async (req, res, next) => {
  try {
    const { comment} = req.body;

    if (!comment) {
      return res.status(400).json({ message: "Comment is required" });
    }

    const newComment = await prisma.comment.create({
      data: {
        comment,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return res.status(201).json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    next(error);
  }
};

module.exports = addComment;
