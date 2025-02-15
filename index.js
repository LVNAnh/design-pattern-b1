const express = require("express");
const mongoDB = require("./database/mongo.db");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = 3000;

(async () => {
  await mongoDB.connect();
})();

app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Movie Ticket Booking API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
