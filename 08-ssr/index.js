import express from "express";
import ejs from "ejs";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", {
        websiteName: "Bikram's Hub",
        authorName: "Bikram",
        authorSkills: ["Python", "HTML", "Javascript", "CSS", "React", "Node"],
        authorCity: "Kolkata",
        currentYear: new Date().getFullYear(),
    });
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
