const { addComment, updateComment, deleteComment , getComment, getAllComments} = require("../controllers/comments")

const router = require("express").Router()


router.post('/add', addComment);
router.put('/update', updateComment);
router.delete('/delete', deleteComment);
router.get("/getComment", getComment);
router.get("/getComment", getAllComments)

module.exports = router;
