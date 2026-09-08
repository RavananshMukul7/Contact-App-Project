import express from "express";
const router = express.Router();
import {
    home,
    get_add_contact,post_add_contact,
    get_edit_contact, post_edit_contact,
    get_show_contact, get_delete_contact
} from "../controller/contact.controller.js";

// Contact Routes
router.get("/", home);

router.get("/add-contact", get_add_contact);

router.post("/add-contact", post_add_contact); 

router.get("/edit-contact/:id",get_edit_contact);

router.post("/edit-contact/:id", post_edit_contact);

router.get("/show-contact/:id",get_show_contact);

router.get("/delete-contact/:id",get_delete_contact);

export default router;