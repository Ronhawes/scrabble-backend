const addComment = require("./add")
const deleteComment = require("./delete")
const updateComment = require("./update")
const getComment = require("./getComment")
const  getAllComments = require("./getComments")


module.exports = {
    addComment,
    updateComment,
    deleteComment,
    getComment,
    getAllComments
}