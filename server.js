const path = require("path");
const express = require("express");
const next = require("next");
const multer = require("multer");
const { createServer } = require("http");
const { parse } = require("url");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

// Multer configuration
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(
      null,
      file.originalname.toLocaleLowerCase().split(" ").join("-").split(".")[0] +
        "-" +
        uniqueSuffix +
        path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
  // limits: { fieldNameSize: 20 * 1000000 },
  fileFilter: (req, file, cb) => {
    const suportedformats = /png|jpeg|jpg|pjp|pjpeg|jfif|svg|webp|/;
    const extension = path.extname(file.originalname);

    suportedformats.test(extension) ? cb(null, true) : cb(new Error(" invalid file type "));
  },
});
// Handle image upload
server.post("/api/upload", upload.array("image"), (req, res) => {
  req.files.map((item) => {
    req.path = req.path.replace(/\\/g, "/");
    item.img_url = `${item.path.split("public")[1]}`;
  });
  6;
  res.status(201).json({ data: req.files });
});
server.use("/", express.static("public"));
app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  createServer(server).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
