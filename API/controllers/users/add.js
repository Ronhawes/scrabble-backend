const prisma = require("../../prisma");

const AddPlayer = async (req, res, next) => {
  try {
    const { firstname, lastname, password, username, gender } = req.body;

    if (!firstname || !lastname || !password || !username || !gender) {
      throw {
        custom: true,
        message: "All fields are required: firstName, lastName, password, userName, and gender",
      };
    }

    const player = await prisma.player.create({
      data: {
        firstname,
        lastname,
        password,
        username,
        gender,
   
      },
    });

    return res.status(201).json({ message: "Player was added successfully", player });
  } catch (error) {
    next(error);
  }
};

module.exports = AddPlayer;
