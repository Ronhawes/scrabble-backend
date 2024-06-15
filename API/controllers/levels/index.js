const addLevel = require("./add");
const deleteLevel = require("./delete");
const updateLevel = require("./update");
const {getLevelById, getAllLevels}= require("./getLevel");


module.exports = {
    addLevel,
    updateLevel,
    deleteLevel,
    getLevelById,
    getAllLevels
};
