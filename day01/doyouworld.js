const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => new Promise((success) => rl.question(query, success));
const main = async () => {
  console.log("두유 월드에 오신걸 환영합니다.");
  while (true) {
    console.log("1.주문하기");
    console.log("2.포장하기");
    console.log("3.종료하기");
    const answer = await askQuestion("번호 입력:");
    if (answer == "1") console.log("주문 시작!");
    else if (answer == "2") console.log("포장 시작!");
    else if (answer == "3") {
      console.log("종료 ㅅㄱ");
      break;
    } else console.log("잘못된 입력 ㅅㄱ");
  }
};
main();
