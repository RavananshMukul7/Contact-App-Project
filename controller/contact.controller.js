import contact from "../model/contact.model.js";
import mongoose from "mongoose";

export const home = async (req, res) => {
    try {
        const {page = 1, limit = 5} = req.query;
        const PaginationObject = await contact.paginate(
            {},
            {
                page: page,
                limit: limit
            }
        );

        const contacts = PaginationObject.docs;

        const utilities = {
            totalDocs: PaginationObject.totalDocs,
            limit: PaginationObject.limit,
            totalPages: PaginationObject.totalPages,
            page: PaginationObject.page,
            pagingCounter: PaginationObject.pagingCounter,
            hasPrevPage: PaginationObject.hasPrevPage,
            hasNextPage: PaginationObject.hasNextPage,
            prevPage: PaginationObject.prevPage,
            nextPage: PaginationObject.nextPage
        }

        res.render("home", {contacts, utilities});

    } catch (error) {
        console.error(error);

        res.status(500).send({
            message: error.message
        });
    }
};

export const get_add_contact = (req, res) => {res.render("add-contact")};

export const post_add_contact = async (req, res) => {
    await contact.create(req.body);
    res.redirect('/');
};

export const get_edit_contact = async  (req, res) => {
    const validId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!validId) return res.send("<h1>Enter valid contact id.</h1>");
    const Contact = await contact.findById(req.params.id);
    if(!Contact) return res.send("<h1>contact does not exist.</h1>");
    res.render("edit-contact", {Contact});
};

export const post_edit_contact = async (req, res) => {
    const validId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!validId) return res.send("<h1>Enter valid contact id.</h1>");
    const Contact = await contact.findById(req.params.id);
    if(!Contact) return res.send("<h1>contact does not exist.</h1>");
    await contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
};

export const get_show_contact = async (req, res) => {
    const validId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!validId) return res.send("<h1>Enter valid contact id.</h1>");
    const Contact = await contact.findById(req.params.id);
    if(!Contact) return res.send("<h1>contact does not exist.</h1>");
    res.render("show-contacts", {Contact});
};

export const get_delete_contact = async (req, res) => {
    const validId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!validId) return res.send("<h1>Enter valid contact id.</h1>");
    const Contact = await contact.findById(req.params.id);
    if(!Contact) return res.send("<h1>contact does not exist.</h1>");
    await contact.findByIdAndDelete(req.params.id);
    res.redirect('/');
};