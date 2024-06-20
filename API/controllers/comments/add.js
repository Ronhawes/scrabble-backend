const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addComment = async (req, res, next) => {
  try {
    const { comment,id} = req.body;

    if (!comment||!id) {
      return res.status(400).json({ message: "Comment is required" });
    }

    const newComment = await prisma.comment.create({
      data: {
        id,
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
