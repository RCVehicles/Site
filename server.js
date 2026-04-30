const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/bestelling", (req, res) => {
  console.log("Nieuwe bestelling:", req.body);
  res.json({ status: "ok" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server draait");
});
