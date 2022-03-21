import express from "express";

const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
  console.log("up and running");
});
