const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000

const app = express();
// Use Morgan here ?
// Morgan looks like code below app.use
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// set up routes here
require("./routes/routes.js")(app);
require("./routes/html.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});