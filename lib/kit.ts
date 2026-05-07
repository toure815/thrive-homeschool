// Kit (ConvertKit) email capture
// Set NEXT_PUBLIC_KIT_FORM_ID in .env.local once you have your Kit account set up

export async function subscribeToKit(email: string, firstName?: string): Promise<{ success: boolean; message: string }> {
  const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID;
  if (!formId) {
    console.warn("KIT_FORM_ID not set — skipping subscription");
    return { success: false, message: "Email service not configured yet." };
  }

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.KIT_API_KEY,
        email,
        first_name: firstName,
        tags: ["SMART Ebook Download"],
      }),
    });

    if (!res.ok) throw new Error("Kit API error");
    return { success: true, message: "You're in! Check your inbox for the free guide." };
  } catch {
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
