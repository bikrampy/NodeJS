import express from "express";
import ejs from "ejs";
import path from "path";
import multer from "multer";

// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "application/pdf"
        ) {
            cb(null, true);
        } else {
            cb(new Error("Only images and pdfs allowed"));
        }
    },
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
});

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.render("home");
});

// app.post("/upload", upload.single("profileImage"), (req, res) => {
//     res.json(req.file);
// });

// app.post("/upload", upload.array("photos", 5), (req, res) => {
//     res.json(req.files);
// });

// app.post(
//     "/upload",
//     upload.fields([
//         { name: "profileImage", maxCount: 1 },
//         { name: "photos", maxCount: 5 },
//     ]),
//     (req, res) => {
//         res.json(req.files);
//     },
// );

app.post(
    "/upload",
    upload.fields([
        { name: "profileImage", maxCount: 1 },
        { name: "files", maxCount: 5 },
    ]),
    (req, res) => {
        console.log(req.files);
        res.redirect("/");
    },
);

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});
