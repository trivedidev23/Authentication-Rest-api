const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/posts", require("./routes/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => console.log("Server started"));
