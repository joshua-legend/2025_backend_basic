const ExcelJS = require("exceljs");
const namer = require("korean-name-generator");

const excel = new ExcelJS.Workbook(); // 엑셀 생성
const baskinSheet = excel.addWorksheet("베스킨라빈스");
baskinSheet.addRow(["name", "kcal", "ingredients"]);
baskinSheet.addRow(["엄외", "250", "초코"]);
baskinSheet.addRow(["초코", "300", "초코"]);
baskinSheet.addRow(["딸기", "150", "딸기"]);
baskinSheet.addRow(["민초", "250", "민트,초코"]);
baskinSheet.addRow(["바닐라", "151", "바닐라"]);

const koreanSheet = excel.addWorksheet("한국사람");
koreanSheet.addRow(["name", "age", "region"]);

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const korean = ["경기", "강원", "충청", "전라", "경상", "제주", "서울", "킹천", "부산"];

for (let i = 0; i < 1000; i++) {
  koreanSheet.addRow([namer.generate(rand(0, 1)), rand(5, 80), korean[rand(0, korean.length - 1)]]);
}

excel.xlsx.writeFile("quiz.xlsx");
