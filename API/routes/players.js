const { AddPlayer, DeletePlayer, UpdatePlayer } = require("../controllers/users")

const router = require("express").Router()

router.post("/add", AddPlayer)
router.delete("/delete", DeletePlayer)
router.put("/update", UpdatePlayer)


module.exports = router