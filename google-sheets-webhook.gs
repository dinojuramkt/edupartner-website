const SHEET_NAME = "Leads";
const SPREADSHEET_ID = "";

function getSpreadsheet() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error("No active spreadsheet found. Set SPREADSHEET_ID or create this script from Extensions > Apps Script inside the Google Sheet.");
  }

  return spreadsheet;
}

function getLeadSheet() {
  const spreadsheet = getSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

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

  return sheet;
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Edupartner Google Sheet webhook is ready.",
  });
}

function doPost(e) {
  try {
    const body = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    const data = JSON.parse(body);
    const sheet = getLeadSheet();

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

    return jsonResponse({
      ok: true,
      message: "Lead saved.",
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      message: error && error.message ? error.message : "Unknown Apps Script error.",
    });
  }
}
