class Coffee {
  #name;
  #stock;
  #price;
  constructor(name, stock, price) {
    this.#name = name;
    this.#stock = stock;
    this.#price = price;
  }
  getName() {
    return this.#name;
  }
  getStock() {
    return this.#stock;
  }
  getPrice() {
    return this.#price;
  }
}
module.exports = { Coffee };
