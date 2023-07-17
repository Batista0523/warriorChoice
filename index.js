const { readJSONFile, writeJSONFile } = require("./helpers");

const weapons = readJSONFile("data", "weapons.json");

function createItem(item) {
  const newItem = {
    id: generateItemId(),
    ...item
  };
  weapons.push(newItem);
  writeJSONFile("data", "weapons.json", weapons);
  return newItem;
}

function listItems() {
  return weapons;
}

function getItemById(itemId) {
  return weapons.find((item) => item.id === itemId);
}

function deleteItem(itemId) {
  const index = weapons.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    const deletedItem = weapons.splice(index, 1)[0];
    writeJSONFile("data", "weapons.json", weapons);
    return deletedItem;
  }
  return null;
}

function updateItem(itemId, updatedItem) {
  const index = weapons.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    const oldItem = weapons[index];
    const newItem = { ...oldItem, ...updatedItem };
    weapons[index] = newItem;
    writeJSONFile("data", "weapons.json", weapons);
    return newItem;
  }
  return null;
}

function generateItemId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  createItem,
  listItems,
  getItemById,
  deleteItem,
  updateItem
};
