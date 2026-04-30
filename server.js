const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Outlook / Hotmail configuratie
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "JOUW-OUTLOOK-EMAIL@outlook.com",
    pass: "JOUW-OUTLOOK-WACHTWOORD"
  }
});

app.post("/bestelling", async (req, res) => {
  const { product } = req.body;

  try {
    await transporter.sendMail({
      from: "JOUW-OUTLOOK-EMAIL@outlook.com",
      to: "JOUW-OUTLOOK-EMAIL@outlook.com",
      subject: "Nieuwe bestelling",
      text: `Er is een bestelling geplaatst voor: ${product}`
    });

    res.json({ status: "ok" });
  } catch (err) {
    console.error("Email fout:", err);
    res.status(500).json({ status: "error" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server draait");
});