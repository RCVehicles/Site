require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Outlook / Hotmail configuratie
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "rcvehicles@outlook.com",
    pass: process.env.MAIL_PASS
  }
});

app.post("/bestelling", async (req, res) => {
  const { product } = req.body;

  try {
    await transporter.sendMail({
      from: "rcvehicles@outlook.com",
      to: "david@deschoenmaten.nl",
      subject: "Nieuwe bestelling",
      text: `Er is een bestelling geplaatst voor: ${product}`
    });

    res.json({ status: "ok" });
  } catch (err) {
    console.error("Email fout:", err);
    res.status(500).json({ status: "error" });
  }
});
 
app.listen(process.env.PORT || 1000, () => {
  console.log("Server draait");
});