const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
	},
	Class: {
		type: String,
		required: true,
	},
	Race: {
		type: String,
		required: true,
	},
	Level: {
		type: Number,
	},
	backStory: {
		type: String,
	},
	physicalAtt: {
		type: Object,
		required: true,
	},
	Stats: {
		type: Object,
		required: true,
	},
    owner_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Character", CharacterSchema);
