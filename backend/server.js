const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running fine");
});

app.listen(5000, console.log("server started at port 5000"));
