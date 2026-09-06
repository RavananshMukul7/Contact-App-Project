import express from "express";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();
const app = express();

//Connect to MongoDB
import connectDB from "./config/database.js";
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Contact Routes
import ContactRouter from "./routes/contact.routes.js";
app.use("/", ContactRouter);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

