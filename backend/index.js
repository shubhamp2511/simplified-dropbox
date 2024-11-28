const express = require("express");
const sequelize = require("./config/db");
const fileRoutes = require("./routes/fileRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files
app.use(fileRoutes); // API routes
app.use(errorHandler); // Error handling middleware

// Sync Database and Start Server
(async () => {
  try {
    await sequelize.sync(); // Sync Sequelize models with database
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
  }
})();
