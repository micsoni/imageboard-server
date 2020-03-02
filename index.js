const express = require("express");
const imageRouter = require("./image/router");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

//using cors
const corsMiddleware = cors();
app.use(corsMiddleware);

//using bodyparser from express
const parser = express.json();
app.use(parser);

app.use(imageRouter);
app.listen(port, () => console.log(`Listening on :${port}`));
