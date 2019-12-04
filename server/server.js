const express = require("express");
const app = express();
const parse = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

app.use(cors())
app.use(parse.json())


MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    console.log(err);
  }
  const db = client.db("hotel_bookings");
  const guestsCollection = db.collection("guests");
  const guestsRouter = createRouter("guestsCollection");
  app.use("/api/guests", guestsRouter);

  app.listen(3000, function () {
    console.log(`listening on on port ${this.address().port}`);
  })
})
