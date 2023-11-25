const { Router } = require("express");
const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  const checkUser = await UserModel.find({ email: req.body.email });
  if (checkUser.length >= 1) {
    res.send({ user: "", message: "User already exists" });
  } else {
    const user = await UserModel.create(req.body);
    res.status(200).send({ user });
  }
});

authRouter.post("/login", async (req, res) => {
  const checkUser = await UserModel.find(req.body);
  if (checkUser.length >= 1) {
    let { username, _id, role } = checkUser[0];
    let token = jwt.sign(
      { id: _id, username: username },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    let payload = {
      username,
      _id,
      role,
      token: token,
    };
    res.status(200).send(payload);
  } else {
    res.send({ user: "", message: "Invalid usarname or password" });
  }
});

module.exports = authRouter;
