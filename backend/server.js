const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notfound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("Api is running fine");
});

app.use("/api/user", userRoutes);

app.use(notfound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started at port no ${PORT}`));
