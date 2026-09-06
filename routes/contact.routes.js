import express from "express";
import contact from "../model/contact.model.js"
const router = express.Router();

// Contact Routes
router.get("/", async (req, res) => {
    const contacts = await contact.find();
    res.render("home", {contacts});
});

router.get("/add-contact", (req, res) => {res.render("add-contact")});

router.post("/add-contact", async (req, res) => {
    await contact.create(req.body);
    res.redirect('/');
}); 

router.get("/edit-contact/:id",async  (req, res) => {
   const Contact = await contact.findById(req.params.id);
   res.render("edit-contact", {Contact});
});

router.post("/edit-contact/:id", async (req, res) => {
    await contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
});

router.get("/show-contact/:id",async (req, res) => {
    const Contact = await contact.findById(req.params.id);
    res.render("show-contacts", {Contact});
});

router.get("/delete-contact/:id",async (req, res) => {
    await contact.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

export default router;