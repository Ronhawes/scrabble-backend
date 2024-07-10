const { addLevel,
    updateLevel,
    deleteLevel,
    getLevelById,
    getAllLevels } = require("../controllers/levels")

const router = require("express").Router()

router.post("/add", addLevel)
router.delete("/delete", deleteLevel)
router.put("/update", updateLevel)
router.get("/getLevel", getLevelById)
router.get("/getLevels", getAllLevels)


module.exports = router