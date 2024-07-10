const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllComments = async (req, res, next) => {
  try {
    const comments = await prisma.comment.findMany();
    if (comments.length === 0) {
      throw {
        custom: true,
        message: "Comments not found",
      }
    }
    return res.status(200).json(comments);
  } catch (error) {
    next();
  }
};

module.exports = getAllComments;
