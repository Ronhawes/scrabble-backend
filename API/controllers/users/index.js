const AddPlayer = require("./add")
const DeletePlayer = require("./delete")
const UpdatePlayer = require("./update")
const {getPlayer, getAllPlayers} = require('./getPlayers');



module.exports = {
    AddPlayer,
    UpdatePlayer,
    DeletePlayer,
    getAllPlayers,
    getPlayer
}

