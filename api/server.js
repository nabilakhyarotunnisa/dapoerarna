const dotenv = require("dotenv");
dotenv.config(); // Memuat variabel dari .env

const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Rute untuk user
app.use("/api/users", userRoutes);

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
