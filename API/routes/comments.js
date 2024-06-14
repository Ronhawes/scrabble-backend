const { addComment, updateComment, deleteComment } = require("../controllers/comments")

const router = require("express").Router()


router.post('/comments/add', addComment);
router.put('/comments/update', updateComment);
router.delete('/comments/delete', deleteComment);

module.exports = router;
