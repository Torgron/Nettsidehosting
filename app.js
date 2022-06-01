const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/videojs", express.static("./node_modules/video.js/dist"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static("./node_modules/jquery/dist"));
app.use("/popperjs", express.static("./node_modules/@popperjs/core/dist/umd"));

app.get("/", (req, res) => {
    res.render("home", {page_name: "home"});
});

app.get("/heroku", (req, res) => {
    res.render("heroku", {page_name: "heroku"});
});

app.get("/github", (req, res) => {
    res.render("github", {page_name: "github"});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Server started on port 8080");
});