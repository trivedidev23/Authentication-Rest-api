const express = require("express");
const router = express.Router();

// route - Profile Route
//access - public

router.get("/", (req, res) => res.send("Profile Routes"));

module.exports = router;
