const express = require("express");
const env = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors"); // Import the cors package
const app = express();
const userRoutes = require("./routes/user.routes");
const messageRoutes = require("./routes/message.routes");
const chatRoutes = require("./routes/chat.routes");
const { notFound, errorHandler } = require("./middleware/errorMessage.js");

env.config();
connectDB();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:3000', // Your client origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // Allow cookies to be sent
  }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => console.log("Server started on port 5000"));
