const express = require("express");
const app = express();
const compression = require("compression");
app.use(compression());
const fs = require("fs");

app.use(express.static("build"));

const listener = app.listen(process.env.PORT || 1234, function() {
  console.log(`Listening on port ${listener.address().port}`);
});
