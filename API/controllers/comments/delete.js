const prisma = require("../../prisma")

const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: "comment ID is required"
    };
  }

   

    const Comment = await prisma.comment.delete({
      where: { id: parseInt(id) },
    });

  
   
    return res.status(200).json({ message: "Comment deleted successfully" });
  
  } catch (error) {
    next(error);
  }
};

module.exports = deleteComment;
