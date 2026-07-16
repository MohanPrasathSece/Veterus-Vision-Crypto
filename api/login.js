import { put, head } from "@vercel/blob";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  console.log("=== API LOGIN LOG ===");
  console.log("Login attempt for:", email);

  try {
    // Check if user exists in Blob
    const userBlobPath = `users/${email.toLowerCase()}.json`;
    
    let exists = false;
    try {
      await head(userBlobPath);
      exists = true;
    } catch (err) {
      // Blob not found throws an error
      exists = false;
    }

    if (!exists) {
      console.log("User not found in Blob:", email);
      return res.status(401).json({ error: "Invalid credentials or account does not exist." });
    }

    console.log("User found. Creating session.");

    // Create Session
    const sessionToken = crypto.randomBytes(32).toString("hex");
    const sessionJson = JSON.stringify({ email: email.toLowerCase(), createdAt: new Date().toISOString() });
    await put(`sessions/${sessionToken}.json`, sessionJson, {
      access: "public",
      addRandomSuffix: false
    });

    console.log("Session created successfully.");

    return res.status(200).json({
      success: true,
      message: "Login successful",
      sessionToken
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ error: "An unexpected error occurred during login." });
  }
}
