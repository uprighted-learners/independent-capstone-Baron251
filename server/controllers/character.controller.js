const router = require("express").Router();
const Character = require("../models/character.model");

const validateSession = require("../middleware/validate-session");

// const errorResponse = (res, error) => {
// 	return res.status(500).json({
// 		Error: error.message,
// 	});
// };

//TODO POST One
// http://localhost:4000/characters/
router.post("/", validateSession, async (req, res) => {
	try {
		const character = new Character({
			name: req.body.name,
			class: req.body.class,
			race: req.body.race,
			level: req.body.level,
			backStory: req.body.backStory,
			physicalAtt: req.body.physicalAtt,
			stats: req.body.stats,
			owner_id: req.user._id,
		});

		const newCharacter = await character.save();

		res.status(200).json({
			character: newCharacter,
			message: "Congrats! You have the start of a new character",
		});
	} catch (err) {
		console.log(err)
	}
});

//TODO GET All
router.get("/", validateSession, async (req, res) => {
	try {
		const getAllCharacters = await Character.find();

		getAllCharacters
			 ? res.status(200).json({
					message: "All characters made so far.",
					getAllCharacters,
			  })
			 : res.status(404).json({
					message: `No characters found.`,
			  });
	} catch (error) {
		console.log(error)
	}
});

//TODO GET One
router.get("/:id", validateSession, async (req, res) => {
	try {
        const { id } = req.params
		const getCharacter = await Character.findOne({ _id: id });

		getCharacter
			? res.status(200).json({
					message: `${getCharacter.name} was found.`,
					getCharacter
			  })
			: res.status(404).json({ message: `That character was not found` });
	} catch (error) {
		console.log(error)
	}
});

//TODO PATCH One
router.patch("/:id", validateSession, async (req, res) => {
	try {
		const { id } = req.params;
		const info = req.body;
		const returnOption = { new: true };

		const update = await Character.findOneAndUpdate(
			{ _id: id, owner_id: req.user.id },
			info,
			returnOption
		);

		update
			? res.status(200).json({
					message: `Character successfully updated.`,
					update,
			  })
			: res.status(404).json({
					message: `Could not find character to patch`,
			  });
	} catch (error) {
		console.log(error)
	}
});

//TODO DELETE One
router.delete("/:id", validateSession, async (req, res) => {
	try {
		//1. Capture ID
		const { id } = req.params;
		//2. use delete method to locate and remove based off ID
		const deleteCharacter = await Character.deleteOne({
			_id: id,
			owner_id: req.user.id,
		});
		//3. Respond to Client

		deleteCharacter.deletedCount
			? res.status(200).json({
					message: `I hope that you meant to do that because they aren't coming back.`,
					deleteCharacter,
			  })
			: res.status(404).json({
					message: `Could not find character to delete.`,
			  });
	} catch (err) {
		console.log(err)
	}
});
module.exports = router;
