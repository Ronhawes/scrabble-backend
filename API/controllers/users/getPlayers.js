const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllPlayers = async (req, res, next) => {
  try {
    const players = await prisma.players.findMany();
    if (players.length === 0) {
      return res.status(404).json({ message: "No players found" });
    }
    return res.status(200).json(players);
  } catch (error) {
    console.error("Error retrieving players:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getPlayer = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return res.status(400).json({ message: "ID must be a valid number" });
    }

    const player = await prisma.players.findUnique({
      where: { id: parsedId },
    });

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    return res.status(200).json(player);
  } catch (error) {
    console.error("Error retrieving player:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllPlayers, getPlayer };
