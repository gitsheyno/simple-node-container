const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "This is a simple API response!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
