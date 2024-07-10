const prisma = require("../../prisma");

const updateComment = async (req, res, next) => {
  try {
    const { id, comment } = req.body; // Changed to req.body

    if (!id || !comment) {
      throw {
        custom: true,
        message: "ID, fullnames, gender, and username are required",
      };
    }

   

    // Check if the comment exists
    const updatedComment = await prisma.comment.update({
      where: { id: parseInt(id) },
      data:{
        comment
      }
    });

    

    return res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
  
  } catch (error) {
    next(error);
  }
};

module.exports = updateComment;
