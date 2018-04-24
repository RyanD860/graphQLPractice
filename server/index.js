const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// connecting to Mongoose
mongoose.connect(process.env.CONNECTIONSTRING);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

const port = 3020;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
