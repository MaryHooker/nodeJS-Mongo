//create model
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new instance of class schema
let MovieSchema = new Schema(
    {
        "movieTitle":String,
        "movieDuration":Number,
    }
)

//export model
module.exports = mongoose.model('movieEntries',MovieSchema);