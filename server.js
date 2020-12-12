require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const connection_url = process.env.MONGO_URI;
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB conncted.");
});


app.use("/register", require("./routes/register.js"));
app.use("/login", require("./routes/login.js"));
app.use("/users", require("./routes/allUsers.js"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
