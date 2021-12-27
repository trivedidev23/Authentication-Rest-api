const express = require("express");
const router = express.Router();

// route - Post Route
//access - public

router.get("/", (req, res) => res.send("Post Routes"));

module.exports = router;
