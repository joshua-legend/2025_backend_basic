const fs = require("fs");
const { askQuestion, initializeData } = require("./func/prompt.js");

const main = async () => {
  const data = initializeData();
  console.log("두유 월드에 오신걸 환영합니다.");
  while (true) {
    console.log("1.판매하기");
    console.log("2.재고 채우기");
    console.log("3.금일 정산");
    console.log("4.시스템 종료");
    const answer = await askQuestion("번호 입력:");
    if (answer == "1") console.log("판매하기 시작!");
    else if (answer == "2") {
      console.log("재고 채우기 시작!");
      data.forEach((v) => v.introduce());
      const menu = await askQuestion("번호 입력:");
      const amount = await askQuestion("몇개 추가:");
      data[+menu].addStock(+amount);
      const saveData = { coffeeMenu: data.map((v) => v.makeObj()) };
      fs.writeFileSync("doyou.json", JSON.stringify(saveData), "utf-8");
      console.log("재고 업데이트 완료!");
    } else if (answer == "3") {
      console.log("3.금일 정산");
    } else if (answer == "4") {
      console.log("시스템 종료 ㅂㅂ");
      break;
    } else console.log("잘못된 입력 ㅅㄱ");
  }
};
main();
