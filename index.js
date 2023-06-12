const fs = require("node:fs");

const { writeJSONFile } = require("./helpers");

// Data
const weapons = [
  {
    name: "darksword",
    priceInCents: 1000,
    inStock: true,
    uniquePro: "stronger at night",
    damage: "130 HP",
    strongerAgainsts: "day's dragons",
    weight: "28 lbs",
  },
  {
    name: "sunsword",
    priceInCents: 1300,
    inStock: false,
    uniquePro: "stronger at day",
    damage: "150 HP",
    strongerAgainsts: "night's dragons",
    weight: "30 lbs",
  },
  {
    name: "firesword",
    priceInCents: 1990,
    inStock: true,
    uniquePro: "fire",
    damage: "130 HP",
    strongerAgainsts: "vegan dragons",
    weight: "34 lbs",
  },
  {
    name: "watersword",
    priceInCents: 1090,
    inStock: false,
    uniquePro: "water",
    damage: "170 HP",
    strongerAgainsts: "fire dragons",
    weight: "36 lbs",
  },
];

// Function to create a new item
function createItem(item) {
  const newItem = { id: generateItemId(), ...item };
  weapons.push(newItem);
  writeJSONFile("data", "weapons.json", weapons);
  return newItem;
}

// Function to list all items
function listItems() {
  return weapons;
}

// Function to get details of an item by ID
function getItemById(itemId) {
  return weapons.find((item) => item.id === itemId);
}

// Function to delete an item by ID
function deleteItem(itemId) {
  const index = weapons.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    const deletedItem = weapons.splice(index, 1)[0];
    writeJSONFile("data", "weapons.json", weapons);
    return deletedItem;
  }
  return null;
}

// Function to update an item by ID
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

// Function to generate a unique item ID
function generateItemId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = {
  createItem,
  listItems,
  getItemById,
  deleteItem,
  updateItem,
};
