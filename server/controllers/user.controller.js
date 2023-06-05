const router = require("express").Router();
const User = require("../models/user.model");

const validateSession = require("../middleware/validate-session")

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT;

const errorResponse = (res, error) => {
	return res.status(500).json({
		Error: error.message,
	});
};

router.post("/signup", async (req, res) => {
	try {
		const user = new User({
			firstName: req.body.firstName,
			userName: req.body.userName,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 13),
		});

		const newUser = await user.save();

		const token = jwt.sign({ id: user._id, email: user.email }, SECRET, {
			expiresIn: "1 day",
		});

		res.status(200).json({
			user: newUser,
			message: "Success! User Created!",
			token,
		});
	} catch (err) {
		res.status(500).json({
			ERROR: err.message,
		});
	}
});

router.post("/login", async (req, res) => {
	try {
		const { userName, password } = req.body;

		const user = await User.findOne({ userName: userName });
		if (!user) throw new Error("User not found.");

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) throw new Error("Username or password doesn't match");
		const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1 day" });
		res.status(200).json({
			message: `Login Successful!`,
			token,
			user,
		});
	} catch (err) {
		res.status(500).json({
			msg: err.message,
		});
	}
});

router.get("/getusers", async (req, res) => {
	try {
		const getAllUsers = await User.find();

		getAllUsers
			? res.status(200).json({
					message: "All users",
					getAllUsers,
			  })
			: res.status(404).json({
					message: `... Where'd everybody go?`,
			  });
	} catch (err) {
		res.status(500).json({
			msg: err.message,
		});
	}
});

router.get("/user/:singlueuser", async (req, res) => {
    try {
        const { singleuser } = req.params;
        const getUser = await User.find({ _id: singleuser });

        getUser.length > 0
            ? res.status(200).json({
                getUser
            })
            : res.status(404).json({
                message: `No such user found`
            })
    } catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
})

//TODO STRETCH PATCH User
// router.patch("/:id", validateSession, async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const info = req.body;

// 		const returnOption = {new: true};

// 		const update = await User.findOneAndUpdate(
// 			{ _id: id, id: req.user.id},
// 			info,
// 			returnOption
// 		)

// 		update
// 		// ?
// 			 res.status(200).json({
// 				message: `User successfully patched.`,
// 				update,
// 			// })
// 			// : res.status(404).json({
// 			// 	message: `Could not find that user`
// 			})
// 	} catch (error) {
// 		errorResponse(res, error)
// 	}
// })
module.exports = router;
