const express = require("express");
const { getUser } = require("../models/user");

const router = express.Router();
router.get("/", (req, res) => {
  const [name, id] = [req.query.name, req.query.id];
  getUser({ name, id })
    .then((user) => {
      if (user) {
        delete user.password;
        res.json(user);
      } else res.sendStatus(404);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
