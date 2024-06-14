const prisma = require("../../prisma")

const AddPlayer = async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body

    if (!firstName || !lastName) {
      throw {
        custom: true,
        message: "Fullnames and username are required",
      };
    }

    const player = await prisma.players.create({
      data: {
        firstName,
        lastName,
        datecreated: new Date(),
        dateupdated: new Date(),
      },
    });

    return res.status(200).json({ message: "Player was added successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = AddPlayer;