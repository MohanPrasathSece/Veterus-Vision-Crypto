export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, country, message = "" } = req.body;

  if (!name || !email || !phone || !country) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const firstName = name.split(" ")[0] || name;
  const lastName = name.substring(firstName.length).trim();

  // CRM Payload
  const crmPayload = {
    country_name: country.toLowerCase(),
    description: message,
    phone, 
    email,
    first_name: firstName,
    last_name: lastName,
    custom_fields: {
      Source_ID: "Website",
      Outline_Your_Case: message
    }
  };

  const crmToken = process.env.CRM_TOKEN;
  const crmUrl = process.env.CRM_URL || "https://inwo.crmcore.me/api/lead_management/api/affiliates";

  console.log("=== API CONTACT LOG ===");
  console.log("Incoming contact request for email:", email);
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

  // If CRM succeeds, send to Dashboard
  if (crmSuccess) {
    console.log("CRM Accepted. Proceeding to Dashboard increment.");

    if (!alreadyExists) {
      const dashboardPayload = {
        website: "Veterus Vision",
        type: "contact",
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

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully. We will be in touch soon."
    });
  }

  return res.status(500).json({ error: "Failed to process contact request." });
}
