//create model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//new instance
let GameSchema = new Schema(
    {
        "gameTitle":String,
        "gameType":String,
    }
)

//export model
module.exports = mongoose.model('gameEntries',GameSchema);