import express from "express";
import ejs from "ejs";
import path from "path";
import multer from "multer";

// const upload = multer({ dest: "./uploads/" });

// const imageStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads/images");
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     },
// });

// const imageUpload = multer({
//     storage: imageStorage,
//     fileFilter: function (req, file, cb) {
//         if (
//             file.mimetype === "image/png" ||
//             file.mimetype === "image/jpeg" ||
//             file.mimetype === "image/jpg"
//         ) {
//             cb(null, true);
//         } else {
//             cb(new Error("Only images allowed"));
//         }
//     },
//     limits: {
//         fileSize: 2 * 1024 * 1024,
//     },
// });

const unifiedStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === "application/pdf") {
            cb(null, "./uploads/pdfs");
        } else {
            cb(null, "./uploads/images");
        }
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const combinedUpload = multer({
    storage: unifiedStorage,
    fileFilter: function (req, file, cb) {
        const allowedTypes = [
            "image/png",
            "image/jpeg",
            "image/jpg",
            "application/pdf",
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    "Invalid file type structure. Only PNG, JPG, and PDF are allowed.",
                ),
            );
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024,
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

// app.post("/upload", upload.array("files", 5), (req, res) => {
//     res.json(req.files);
// });

// app.post(
//     "/upload",
//     upload.fields([
//         { name: "profileImage", maxCount: 1 },
//         { name: "resumes", maxCount: 5 },
//     ]),
//     (req, res) => {
//         res.json(req.files);
//     },
// );

// app.post("/upload", imageUpload.single("profileImage"), (req, res) => {
//     console.log(req.files);
//     res.redirect("/");
// });

app.post(
    "/upload",
    combinedUpload.fields([
        { name: "profileImage", maxCount: 1 },
        { name: "resumes", maxCount: 5 },
    ]),
    (req, res) => {
        console.log("Profile Image File Info:", req.files["profileImage"]);
        console.log("Resumes Files Arrays Info:", req.files["resumes"]);
        res.redirect("/");
    },
);

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});
