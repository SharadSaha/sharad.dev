import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const FILE_PATH = path.join(__dirname, "messages.json");

app.post("/submit", (req, res) => {
  const message = req.body;
  const existing = fs.existsSync(FILE_PATH)
    ? JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"))
    : [];

  existing.push({ ...message, timestamp: new Date().toISOString() });

  fs.writeFileSync(FILE_PATH, JSON.stringify(existing, null, 2));
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
