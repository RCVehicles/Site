const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// Email configuratie
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "JOUWEMAIL@gmail.com",
    pass: "JOUW-APP-PASSWORD"
  }
});

app.post("/bestelling", async (req, res) => {
  const { product } = req.body;

  await transporter.sendMail({
    from: "JOUWEMAIL@gmail.com",
    to: "JOUWEMAIL@gmail.com",
    subject: "Nieuwe bestelling",
    text: `Er is een bestelling geplaatst voor: ${product}`
  });

  res.json({ status: "ok" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server draait");
});
