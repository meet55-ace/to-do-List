import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let addItem = [];

app.get("/", (req, res) => {
  const d = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  res.render("index.ejs", {
    day: d,
    newItem: addItem,
  });
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  if (newItem.trim() !== "") {
    addItem.push(newItem);
  }
  res.redirect("/");
});


export default app;
