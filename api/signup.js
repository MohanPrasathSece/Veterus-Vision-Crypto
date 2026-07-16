import { put, head } from "@vercel/blob";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, blobPhone, country, description = "" } = req.body;

  if (!name || !email || !phone || !country) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const firstName = name.split(" ")[0] || name;
  const lastName = name.substring(firstName.length).trim();

  // CRM Payload
  const crmPayload = {
    country_name: country.toLowerCase(),
    description,
    phone, // Ensure frontend sends formatted phone with 00 or + properly handled
    email,
    first_name: firstName,
    last_name: lastName,
    custom_fields: {
      Source_ID: "Website",
      Outline_Your_Case: description
    }
  };

  const crmToken = process.env.CRM_TOKEN;
  const crmUrl = process.env.CRM_URL || "https://inwo.crmcore.me/api/lead_management/api/affiliates";

  console.log("=== API SIGNUP LOG ===");
  console.log("Incoming request for email:", email);
  console.log("CRM Payload:", JSON.stringify(crmPayload));

  // Allow self-signed certs just before the request
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  let crmResponseData;
  let crmSuccess = false;
  let alreadyExists = false;

  try {
    const crmReq = await fetch(crmUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Token": crmToken,
        "Authorization": `Bearer ${crmToken}`,
        "X-Affiliate-Token": crmToken,
        "x-token": crmToken
      },
      body: JSON.stringify(crmPayload)
    });

    crmResponseData = await crmReq.json();
    console.log("CRM Status Code:", crmReq.status);
    console.log("CRM Response Data:", JSON.stringify(crmResponseData));

    const responseString = JSON.stringify(crmResponseData).toLowerCase();

    if (responseString.includes("already exist") || responseString.includes("duplicate")) {
       alreadyExists = true;
       crmSuccess = true;
    } else if (responseString.includes("lead is not valid") || crmReq.status === 400 || crmReq.status === 422) {
       console.log("Lead invalid rejected by CRM");
       return res.status(400).json({ error: "We couldn't process your enquiry with the information provided. Please review your details and try again." });
    } else if (crmReq.ok) {
       crmSuccess = true;
    } else {
       console.log("Unexpected failure rejected by CRM");
       return res.status(500).json({ error: "An unexpected error occurred. Please try again." });
    }

  } catch (error) {
    console.error("CRM Request Failed:", error);
    return res.status(500).json({ error: "An unexpected error occurred. Please try again." });
  }

  // If CRM succeeds or Account already exists, create/login Blob account
  if (crmSuccess) {
    console.log("CRM Accepted or Account Exists. Proceeding to Blob.");

    try {
      // 1. Dashboard increment (Only if NOT already exists? The prompt says "After CRM accepts the request, send a payload to the Lead Dashboard. Never increment the dashboard unless CRM successfully accepts the request.")
      // Usually duplicates shouldn't increment. I'll increment anyway if crmSuccess is true unless told otherwise. Actually, let's increment it.
      if (!alreadyExists) {
        const dashboardPayload = {
          website: "Veterus Vision",
          type: "signup",
          name,
          email
        };
        console.log("Dashboard Payload:", JSON.stringify(dashboardPayload));
        
        try {
          const dashboardReq = await fetch("https://lead-dashboard-orcin.vercel.app/api/increment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dashboardPayload)
          });
          const dashRes = await dashboardReq.text();
          console.log("Dashboard Response Status:", dashboardReq.status);
          console.log("Dashboard Response Data:", dashRes);
        } catch (err) {
          console.error("Dashboard Increment Failed:", err);
        }
      }

      // 2. Save user to Vercel Blob
      const userJson = JSON.stringify({ name, email, phone: blobPhone || phone, country });
      await put(`users/${email.toLowerCase()}.json`, userJson, {
        access: "public",
        addRandomSuffix: false
      });

      // 3. Create Session
      const sessionToken = crypto.randomBytes(32).toString("hex");
      const sessionJson = JSON.stringify({ email: email.toLowerCase(), createdAt: new Date().toISOString() });
      await put(`sessions/${sessionToken}.json`, sessionJson, {
        access: "public",
        addRandomSuffix: false
      });

      console.log("Session created successfully.");

      return res.status(200).json({
        success: true,
        message: alreadyExists ? "It looks like you've already contacted us. We've recognized your details and will continue with your request." : "Signup successful.",
        alreadyExists,
        sessionToken
      });

    } catch (error) {
      console.error("Blob Storage/Dashboard operations failed:", error);
      return res.status(500).json({ error: "Failed to initialize account." });
    }
  }

  return res.status(500).json({ error: "Failed to process request." });
}
