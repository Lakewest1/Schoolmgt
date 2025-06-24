const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Routes = require("./routes/route.js");

const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config({ path: "./.env" }); // Explicitly specify the path

app.use(express.json({ limit: '10mb' }));
app.use(cors());

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI || process.env.MONGO_URL, { // Check both common env variable names
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error:", err));

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});