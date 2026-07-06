# Google Sheets setup for Edupartner leads

Use this setup to send consultation form submissions to Google Sheets.

## 1. Create the spreadsheet

1. Open Google Sheets and create a new file.
2. Rename the first sheet to `Leads`.

## 2. Add Apps Script

In the spreadsheet, open `Extensions > Apps Script`, paste this code, then save.

```javascript
const SHEET_NAME = "Leads";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  const body = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
  const data = JSON.parse(body);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Received At",
      "Lead ID",
      "Name",
      "Phone",
      "Email",
      "Interest",
      "Message",
      "Source",
      "Page URL",
      "Status",
      "Created At",
      "User Agent",
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.id || "",
    data.name || "",
    data.phone || "",
    data.email || "",
    data.interest || "",
    data.message || "",
    data.source || "",
    data.pageUrl || "",
    data.status || "new",
    data.createdAt || "",
    data.userAgent || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy the Web App

1. Click `Deploy > New deployment`.
2. Choose type `Web app`.
3. Set `Execute as` to `Me`.
4. Set `Who has access` to `Anyone`.
5. Deploy and copy the Web App URL.

## 4. Configure the website

Create a `.env` file in the website folder:

```env
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Then rebuild and deploy the website.

```bash
npm run build
```

The website will still save leads locally for the admin page. When the Google Sheet URL is configured, each new lead is also sent to the sheet.
