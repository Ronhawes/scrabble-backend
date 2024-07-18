const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addComment = async (req, res, next) => {
  try {
    const { playerid, comment } = req.body;

    if (!playerid||!comment) {
      throw {
        custom: true,
        message: "Comment is required",
      };
    }

    const newComment = await prisma.comment.create({
      
      data: {
        playerid: parseInt(playerid),
        comment
      },
    });

    return res.status(201).json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    
    next(error);
  }
};

module.exports = addComment;
