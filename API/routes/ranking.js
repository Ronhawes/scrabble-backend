const { addRanking, deleteRanking, updateRanking,getAllRankings,getRanking } = require("../controllers/rankings")

const router = require("express").Router()

router.post("/add", addRanking)
router.delete("/delete", deleteRanking)
router.put("/update", updateRanking)
router.get("/getRankings", getAllRankings)
router.get("/getranking", getRanking)


module.exports = router