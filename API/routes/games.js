const { addGameplayed, updateGameplayed, deleteGameplayed, getGame, getGames } = require("../controllers/games");
const router = require("express").Router();

router.post("/add", addGameplayed);
router.delete("/delete", deleteGameplayed);
router.put("/update", updateGameplayed);
router.get("/getGame", getGame);
router.get("/getGames", getGames);

module.exports = router;
