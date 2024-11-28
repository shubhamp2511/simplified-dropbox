const express = require("express");
const multer = require("multer");
const File = require("../models/file");
const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Upload file
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { filename, path: filepath, mimetype } = req.file;
    await File.create({ filename, filepath, mimetype });
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (err) {
    res.status(500).json({ error: "File upload failed" });
  }
});

// Get list of files
router.get("/files", async (req, res) => {
  const files = await File.findAll();
  res.status(200).json(files);
});

// Download file
router.get("/download/:id", async (req, res) => {
  const file = await File.findByPk(req.params.id);
  if (!file) {
    return res.status(404).json({ error: "File not found" });
  }
  res.download(file.filepath, file.filename);
});

module.exports = router;
