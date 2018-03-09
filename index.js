const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ yo: "sup" });
});

const PORT = process.env.PORT || app.listen(5000);

app.listen(PORT);
