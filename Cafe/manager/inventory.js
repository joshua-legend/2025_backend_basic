class InventoryManager {
  listProduct(data) {
    data.forEach((v) => console.log(`${v.name} ${v.stock}`));
  }
  replenishProduct(data, amount) {
    data.stock += amount;
  }
}
module.exports = { InventoryManager };
