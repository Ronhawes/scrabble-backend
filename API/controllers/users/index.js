const AddPlayer = require("./add")
const DeletePlayer = require("./delete")
const UpdatePlayer = require("./update")
const UpdatePlayers = require("./updateMany")
const getPlayer = require('./getPlayer');
const getAllPlayers=require('./getPlayers')



module.exports = {
    AddPlayer,
    UpdatePlayer,
    UpdatePlayers,
    DeletePlayer,
    getAllPlayers,
    getPlayer
}

