const prisma = require("../../prisma");

const AddPlayer = async (req, res, next) => {
  try {
    const { firstName, lastName, password, userName, gender } = req.body;

    if (!firstName || !lastName || !password || !userName || !gender) {
      throw {
        custom: true,
        message: "All fields are required: firstName, lastName, password, userName, and gender",
      };
    }

    const player = await prisma.player.create({
      data: {
        firstName,
        lastName,
        password,
        userName,
        gender,
   
      },
    });

    return res.status(201).json({ message: "Player was added successfully", player });
  } catch (error) {
    next(error);
  }
};

module.exports = AddPlayer;
