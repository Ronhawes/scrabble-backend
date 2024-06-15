const { addGameplayed,
    updateGameplayed,
    deleteGameplayed,
    getGameplayed,
    getGame } = require("../controllers/games")

const router = require("express").Router()

router.post("/add", addGameplayed)
router.delete("/delete", deleteGameplayed)
router.put("/update", updateGameplayed)
router.get("/getGame", getGameplayed)
router.get("/getGame", getGame)


module.exports = router