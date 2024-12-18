const express = require("express");
const multer = require("multer");
const Media = require("../models/Media");
const axios = require("axios");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;

  const media = new Media({ fileName: file.filename, status: "processing" });
  await media.save();

  try {
    const response = await axios.post("http://localhost:8000/process", { filePath: file.path });
    media.status = "processed";
    media.results = response.data;
    await media.save();

    res.json({ message: "File processed successfully", media });
  } catch (error) {
    media.status = "failed";
    await media.save();
    res.status(500).json({ message: "Processing failed", error: error.message });
  }
});

module.exports = router;
