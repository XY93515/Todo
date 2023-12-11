import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import authRoutes from "./routes/authRoute.js";
import { fileURLToPath } from "url"; // Import the fileURLToPath function
import { dirname } from "path";
import path from "path";
 
const app = express();
 
app.use(cors());
 
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/auth", authRoutes);
app.use("/", Routes);
 
const __filename = fileURLToPath(import.meta.url); // Use fileURLToPath to get the filename
const __dirname = dirname(__filename); // Use dirname to get the directory name
 
app.use(express.static(path.join(__dirname, "../client/build")));
 
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
 
const PORT = 8000;
 
Connection();
 
app.listen(PORT, () =>
  console.log(`Your server is running successfully on PORT ${PORT}`)
);