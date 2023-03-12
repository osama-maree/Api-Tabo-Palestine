const express = require("express");
var morgan = require("morgan");
require("dotenv").config({ path: "./config/.env" });
const app = express();
// if (process.env.state === "prod") app.use(morgan());
const port = process.env.PORT || 3000;
const { connectDB } = require("./DB/connection");
const {
  authRouter,
  adminRouter,
  employeeRouter,
  userRouter,
} = require("./modules/index.router");
app.use(express.json());
connectDB();
const baseUrl = process.env.BASEURL;
app.use(`${baseUrl}/auth`, authRouter);
app.use(`${baseUrl}/admin`, adminRouter);
app.use(`${baseUrl}/employee`, employeeRouter);
app.use(`${baseUrl}/user`, userRouter);

app.use((err, req, res, next) => {
  if (err) {
    return res
      .status(err["cause"])
      .json({ message: "catch error", error: err.message });
  }
});
app.use("*", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
