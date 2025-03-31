const { Option } = require("./option.js");
const { InventoryManager } = require("../manager/inventory.js");
const { PromptManager } = require("../manager/prompt.js");
const { DataManager } = require("../manager/data.js");

class ReplenishOption extends Option {
  #inventoryManager;
  #promptManager;
  #dataManager;
  constructor(inventoryManager, promptManager, dataManager) {
    super();
    this.#inventoryManager = inventoryManager;
    this.#promptManager = promptManager;
    this.#dataManager = dataManager;
  }

  async execute(data) {
    this.#promptManager.makeConsole("재고 넣기 시작!");
    this.#inventoryManager.listProduct(data);
    const [menu, amount] = this.#promptManager.askNumberAndAmount();
    this.#inventoryManager.replenishProduct(data[+menu], amount);
    this.#dataManager.saveData("coffeeMenu", data);
    this.#promptManager.makeConsole("재고 업데이트 완료!");
  }
}

module.exports = { ReplenishOption };
