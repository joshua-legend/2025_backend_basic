const excelJS = require("exceljs");
const workbook = new excelJS.Workbook();

workbook.xlsx.readFile("quiz.xlsx").then(() => {
  const sheetZero = workbook.getWorksheet(1);
  sheetZero.eachRow((v, i) => {
    console.log(`${v.values}`);
  });
});
