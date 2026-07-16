import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import loginHandler from "./api/login.js";
import signupHandler from "./api/signup.js";
import contactHandler from "./api/contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Bind Vercel serverless function format to Express
app.post("/api/login", async (req, res) => await loginHandler(req, res));
app.post("/api/signup", async (req, res) => await signupHandler(req, res));
app.post("/api/contact", async (req, res) => await contactHandler(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server successfully started on http://localhost:${PORT}`);
});
