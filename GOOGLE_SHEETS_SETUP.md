# Google Sheets setup for Edupartner leads

Use this setup to send consultation form submissions to Google Sheets.

## 1. Create the spreadsheet

1. Open Google Sheets and create a new file.
2. Rename the first sheet to `Leads`.

## 2. Add Apps Script

In the spreadsheet, open `Extensions > Apps Script`, paste this code, then save.

You can also copy the same code from `google-sheets-webhook.gs` in this project.

```javascript
const SHEET_NAME = "Leads";

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: "Edupartner Google Sheet webhook is ready." }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  const body = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
  const data = JSON.parse(body);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Thời gian nhận",
      "Mã yêu cầu",
      "Họ và tên",
      "Số điện thoại",
      "Email",
      "Chương trình quan tâm",
      "Nội dung tư vấn",
      "Nguồn trang",
      "URL trang",
      "Trạng thái",
      "Thời gian gửi form",
      "Trình duyệt / Thiết bị",
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

If you are running the Vite dev server, restart it after changing `.env`.

## 5. Troubleshooting

If test requests do not create rows in Google Sheets, check these items first:

1. Open `Deploy > Manage deployments` in Apps Script.
2. Edit the Web App deployment.
3. Confirm `Execute as` is set to `Me`.
4. Confirm `Who has access` is set to `Anyone`.
5. Deploy again and copy the latest `/exec` URL into `.env`.
6. Restart the Vite dev server or rebuild the website.

`401 Unauthorized` or a Google page saying the page was not found means the Web App is not publicly accessible, the deployment URL is wrong, or the deployment was deleted. The website cannot write to the Sheet until the Apps Script Web App is redeployed with public access.

`Không tìm thấy hàm tập lệnh: doPost` means the current Web App deployment does not include the `doPost` function. Paste the full script above, save it, then go to `Deploy > Manage deployments`, edit the Web App, choose a new version, and deploy again. Opening the `/exec` URL in a browser should show the `doGet` JSON message if the latest code is deployed.

The website will still save leads locally for the admin page. When the Google Sheet URL is configured, each new lead is also sent to the sheet.
