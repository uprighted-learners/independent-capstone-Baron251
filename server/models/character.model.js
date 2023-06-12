const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	class: {
		type: String,
		required: true,
	},
	race: {
		type: String,
		required: true,
	},
	level: {
		type: Number,
	},
	backStory: {
		type: String,
	},
	physicalAtt: {
		type: Object,
		required: true,
	},
	stats: {
		type: Object,
		required: true,
	},
    owner_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Character", CharacterSchema);
