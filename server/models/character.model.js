const mongoose = require("mongoose");

const PhysicalSchema = new mongoose.Schema({
	hair: {
		type: String,
		required: true,
	},
	eyes: {
		type: String,
		required: true,
	},
	height: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	skin: {
		type: String,
		required: true,
	},
	weight: {
		type: Number,
		required: true,
	},
});

const StatSchema = new mongoose.Schema({
	strength: {
		type: Number,
		required: true,
	},
	dexterity: {
		type: Number,
		required: true,
	},
	constitution: {
		type: Number,
		required: true,
	},
	intelligence: {
		type: Number,
		required: true,
	},
	wisdom: {
		type: Number,
		required: true,
	},
	charisma: {
		type: Number,
		required: true,
	},
});

const CharacterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	cla: {
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
		type: PhysicalSchema,
		required: true,
	},
	stats: {
		type: StatSchema,
		required: true,
	},
	owner_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Character", CharacterSchema)