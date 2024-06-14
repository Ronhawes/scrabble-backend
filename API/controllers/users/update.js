const prisma = require("../../prisma")

const UpdatePlayer = async (req, res, next) => {
  try {
    const {id, firstName, LastName } = req.body;

    if (!id || !firstName || !LastName) {
      throw {
        custom: true,
        message: "Player ID, fullnames, and username are required",
      };
    }

    const player = await prisma.players.update({
      where: {
        playerid: parseInt(id),
      },
      data: {
        firstNames,
        LastName,
        dateupdated: new Date(),
        datecreated: new Date(),
      },
    });

    return res.status(200).json({ message: "Player updated successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = UpdatePlayer;