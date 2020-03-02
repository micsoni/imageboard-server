const express = require("express");
const imageRouter = require("./image/router");

const app = express();
const port = process.env.PORT || 4000;

//using bodyparser from express
const parser = express.json();
app.use(parser);

app.use(imageRouter);
app.listen(port, () => console.log(`Listening on :${port}`));
