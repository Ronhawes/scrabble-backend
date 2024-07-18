const prisma = require("../../prisma");

const UpdatePlayer = async (req, res, next) => {
  try {
    const { id, firstname, lastname, gender, username } = req.body;

    if (!id || !firstname || !lastname || !gender || !username) {
      throw {
        custom: true,
        message: "ID, fullnames, gender, and username are required",
      };
    }

    const updatedPlayer = await prisma.player.update({
      where: { id: parseInt(id) },
      data: {
        firstname,
        lastname,
        gender,
        username
      },
    });

    return res.status(200).json({ message: "Player updated successfully", player: updatedPlayer });

  } catch (error) {
    next(error);
  }
};

module.exports = UpdatePlayer;
