const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/dist", express.static("/node_modules/video.js/dist"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

app.get("/", (req, res) => {
    res.render("home");
});






const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Server started on port 8080");
});