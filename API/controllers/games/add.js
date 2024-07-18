const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addGameplayed = async (req, res, next) => {
  try {
    const { playerid,score,levelid} = req.body;

    if (!playerid||!score||!levelid) {
      return res.status(400).json({ message: "id and ranks are required" });
    }

    const newgame = await prisma.game.create({
      data: {
        playerid,
        score,
        levelid,
        createdat: new Date(),
        updatedat: new Date(),
      },
    });

    return res.status(201).json({ message: " added successfully", comment: newgame });
  } catch (error) {
    next(error);
  }
};

module.exports = addGameplayed;
