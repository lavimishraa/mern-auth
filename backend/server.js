// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./routes/authRoutes");

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", authRoutes);

// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//     console.log("MongoDB Connected");
//     app.listen(5000, () => console.log("Server running on 5000"));
// })
// .catch(err => console.log(err));
console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on 5000"));
})
.catch(err => console.log("Mongo Error:", err));