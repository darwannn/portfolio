var express = require("express");
var cors = require("cors");
var app = express();

const dotenv = require("dotenv");
const emailRoutes = require("./routes/contactRoute");

dotenv.config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", emailRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`BACKEND RUNNING...`);
});
