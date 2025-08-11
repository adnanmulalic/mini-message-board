const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/:user/message", (req, res) => {
    let messageDetails = null;
    messages.forEach(message => {
        if (message.user.toLowerCase() === req.params.user) {
            messageDetails = message;
        }
    });
    console.log(req.params)
    res.render("message", { title: messageDetails.user, messageDetails: messageDetails});
});

indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
    res.redirect("/");

});

module.exports = indexRouter;