const addComment = require("./add")
const deleteComment = require("./delete")
const updateComment = require("./update")
const {getComment, getAllComments} = require("./getComment")


module.exports = {
    addComment,
    updateComment,
    deleteComment,
    getComment,
    getAllComments
}