const express = require("express");
const mongoose = require("mongoose");
const mediaRoutes = require("./routes/mediaRoutes");

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/media-detection", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use("/api/media", mediaRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
