const GOOGLE_SHEETS_ENDPOINT =
  import.meta.env?.VITE_GOOGLE_SHEETS_WEBHOOK_URL?.trim() ||
  window.EDUPARTNER_GOOGLE_SHEETS_WEBHOOK_URL?.trim() ||
  "";

export function isGoogleSheetsEnabled() {
  return Boolean(GOOGLE_SHEETS_ENDPOINT);
}

export async function sendLeadToGoogleSheet(lead) {
  if (!isGoogleSheetsEnabled()) {
    return {
      status: "skipped",
      message: "Google Sheet endpoint is not configured.",
    };
  }

  const payload = {
    ...lead,
    pageUrl: window.location.href,
    userAgent: window.navigator.userAgent,
  };

  try {
    await fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return {
      status: "sent",
      message: "Lead was sent to Google Sheet.",
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Could not send lead to Google Sheet.",
    };
  }
}
