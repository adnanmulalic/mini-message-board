const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

// routers
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});