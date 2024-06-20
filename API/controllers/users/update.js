const prisma = require("../../prisma");

const UpdatePlayer = async (req, res, next) => {
  try {
    const { id, firstName, lastName, gender, userName } = req.body;

    if (!id || !firstName || !lastName || !gender || !userName) {
      throw {
        custom: true,
        message: "ID, fullnames, gender, and username are required",
      };
    }

    const updatedPlayer = await prisma.player.update({
      where: { id: parseInt(id) },
      data: {
        firstName,
        lastName,
        gender,
        userName
      },
    });

    return res.status(200).json({ message: "Player updated successfully", player: updatedPlayer });

  } catch (error) {
    next(error);
  }
};

module.exports = UpdatePlayer;
