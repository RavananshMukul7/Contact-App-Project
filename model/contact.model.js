import mongoose from "mongoose";
import paginator from "mongoose-paginate-v2"

const contactSchema = mongoose.Schema({
    first_name:{
        type : String
    },
    last_name:{
        type : String
    },
    email:{
        type : String
    },
    phone:{
        type : String
    },
    address:{
        type : String
    }
});

contactSchema.plugin(paginator);

const contact = mongoose.model("contact", contactSchema);

export default contact;