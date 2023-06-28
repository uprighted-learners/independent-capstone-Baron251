const router = require("express").Router();
const Character = require("../models/character.model");

const validateSession = require("../middleware/validate-session");

//TODO POST One
// http://localhost:4000/character/
router.post("/", validateSession, async (req, res) => {
	try {
		const character = new Character({
			name: req.body.name,
			cla: req.body.cla,
			race: req.body.race,
			level: req.body.level,
			backStory: req.body.backStory,
			physicalAtt: {
				hair: req.body.hair,
				eyes: req.body.eyes,
				height: req.body.height,
				age: req.body.age,
				skin: req.body.skin,
				weight: req.body.weight,
			},
			stats: {
				strength: req.body.strength,
				dexterity: req.body.dexterity,
				constitution: req.body.constitution,
				intelligence: req.body.intelligence,
				wisdom: req.body.wisdom,
				charisma: req.body.charisma,
			},
			owner_id: req.user._id,
		});

		const newCharacter = await character.save();

		res.status(200).json({
			character: newCharacter,
			message: "Congrats! You have the start of a new character",
		});
	} catch (err) {
		console.log(err);
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
		console.log(error);
	}
});

//TODO GET All by ID
router.get("/characters/:owner_id", validateSession, async (req, res) => {
	try {
		const { owner_id } = req.params;

		const getCharacters = await Character.find({ owner_id: owner_id})

		getCharacters.length > 0
		? res.status(200).json({
			getCharacters
		})
		: res.status(404).json({
			message: `No characters made yet`
		})
	} catch (err) {
	console.log(err)		
	}
})

//TODO GET One
router.get("/:id", validateSession, async (req, res) => {
	try {
		const { id } = req.params;
		const getCharacter = await Character.findOne({ _id: id });

		getCharacter;
		res.status(200).json({
			message: `${getCharacter.name} was found.`,
			getCharacter,
		});
	} catch (error) {
		console.log(error);
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
		console.log("Info", info);
		update
			? res.status(200).json({
					message: `Character successfully updated.`,
					update,
			  })
			: res.status(404).json({
					message: `Could not find character to patch`,
			  });
	} catch (error) {
		console.log(error);
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
		console.log(err);
	}
});
module.exports = router;
