const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema({
  fileName: String,
  uploadedAt: { type: Date, default: Date.now },
  status: { type: String, default: "pending" },
  results: Object,
});

module.exports = mongoose.model("Media", MediaSchema);
