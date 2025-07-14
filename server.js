const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, message } = req.body;
  console.log(`Contact received from ${name}: ${message}`);
  res.json({ status: "Message received. Thank you!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
