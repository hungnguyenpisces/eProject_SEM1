const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
//app setting
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));

//dev
const morgan = require("morgan");
app.use(morgan("dev"));

app.listen(port, () => {
	console.log(`Server is runing... http://localhost:${port}`);
});
//router
app.get("/", (req, res) => {
	res.render("home");
});
