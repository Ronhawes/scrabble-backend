const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addComment = async (req, res, next) => {
  try {
    const { playerId, comment } = req.body;

    if (!playerId||!comment) {
      throw {
        custom: true,
        message: "Comment is required",
      };
    }

    const newComment = await prisma.comment.create({
      
      data: {
        playerId: parseInt(playerId),
        comment
      },
    });

    return res.status(201).json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    
    next(error);
  }
};

module.exports = addComment;
