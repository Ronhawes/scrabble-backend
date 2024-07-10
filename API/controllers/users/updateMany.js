const prisma = require("../../prisma");

const UpdatePlayers = async (req, res, next) => {
  try {
    const { ids, firstName, lastName, gender, userName } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      throw {
        custom: true,
        message: "Array of IDs is required",
      };
    }

    if (!firstName || !lastName || !gender || !userName) {
      throw {
        custom: true,
        message: "firstName, lastName, gender, and userName are required",
      };
    }

    const updatedPlayers = await Promise.all(
      ids.map(async (id) => {
        return prisma.player.update({
          where: { id: parseInt(id) },
          data: {
            firstName,
            lastName,
            gender,
            userName,
          },
        });
      })
    );

    return res.status(200).json({ message: "Players updated successfully", players: updatedPlayers });
  } catch (error) {
    next(error);
  }
};

module.exports = UpdatePlayers;
