const exhb = require("express-handlebars");
const express = require("express");
const methodoverride = require("method-override");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routers/handle");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(methodoverride("_method"));
app.engine(
  "hbs",
  exhb({
    defaultLayout: "mainlayout",
    extname: "hbs",
    layoutsDir: "views/layouts"
  })
);
app.set("view engine", "hbs");
app.use("/", route);
app.listen(port, () => {
  console.log("Connected to server");
});
