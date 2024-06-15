const addGameplayed = require("./add")
const deleteGameplayed = require("./delete")
const updateGameplayed = require("./update")
const { getGameplayed, getGame } = require("./getGame")


module.exports = {
    addGameplayed,
    updateGameplayed,
    deleteGameplayed,
    getGameplayed,
    getGame
}