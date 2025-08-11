const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => {
    //res.send("This is new form");
    res.render("form", { title: "Submit Form"});
});

/* indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
}); */

module.exports = newRouter;