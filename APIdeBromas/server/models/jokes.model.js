const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String 
});

const joke = mongoose.model("joke", JokeSchema);

module.exports = joke;

//forma directa

/*const joke = mg.model("joke", mg.Schema({
    setup: String,
    punchline: String 
},{timestamps: true})) 

module.exports = joke;
*/