const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	home_state: String,
	lucky_number: Number,
	birthday: Object
});

const User = mongoose.model("User", UserSchema);

module.exports = User;