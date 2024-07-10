const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getComment = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: "ID is required",
      };
    }

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      throw {
        custom: true,
        message: "ID must be a valid number",
      };
    }

    const comment = await prisma.comment.findUnique({
      where: { id: parsedId },
    });

    if (!comment) {
      throw {
        custom: true,
        message: "Comment not found",
      };
    }

    return res.status(200).json(comment);
  } catch (error) {
    next()
  }
};

module.exports = getComment;
