const express = require("express")
const app = express()
const authRoutes = require("./routes/auth")
const db = require("./db/db.js")

app.use(express.json());

//Route middleware
app.use("/api/user", authRoutes)

app.listen(5000, () => console.log("Server running on port 5000"))