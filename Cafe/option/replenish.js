const fs = require("fs");
const { askQuestion } = require("../func/prompt.js");
const { Option } = require("./option.js");
const { env } = require("../env.js");

class ReplenishOption extends Option {
  async execute(data) {
    console.log("재고 채우기 시작!");
    data.forEach((v) => v.introduce());
    const menu = await askQuestion("번호 입력:");
    const amount = await askQuestion("몇개 추가:");
    data[+menu].addStock(+amount);
    const saveData = { coffeeMenu: data.map((v) => v.makeObj()) };
    fs.writeFileSync(env.dataStore, JSON.stringify(saveData), "utf-8");
    console.log("재고 업데이트 완료!");
  }
}

module.exports = { ReplenishOption };
