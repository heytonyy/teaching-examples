/*
 * This script is designed to be used with a Google Sheet / Google Scripts.
 * It will assign a random password to each row in the sheet.
 * It will also format the rows to be 50 pixels high.
 */

/*
 * The onOpen function runs automatically when the Google Sheet is opened.
 * It adds a menu to the sheet that contains the custom scripts.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Custom Scripts")
    .addItem("Assign Passwords", "assignPasswords")
    .addItem("Format Rows", "formatRows")
    .addToUi();
}

/*
 * The formatRows function will format all rows in the sheet to be 50 pixels high.
 * This is useful for when the sheet is being used to create a printable document.
 */
function formatRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rowHeight = 50;
  var numRows = sheet.getMaxRows();

  for (var i = 1; i <= numRows; i++) {
    sheet.setRowHeight(i, rowHeight);
  }
}

/*
 * The assignPasswords function will assign a random password to each row in the sheet.
 * The password will be placed in column E.
 * The password will be in the format: adjective_animal
 */
function assignPasswords() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const rows = sheet.getLastRow();
  const column = 5; // column E

  for (let i = 1; i <= rows; i++) {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const password = `${adjective}_${animal}`;

    sheet.getRange(i, column).setValue(password);
  }
}

const adjectives = [
  "happy",
  "joyful",
  "cheerful",
  "gleeful",
  "content",
  "merry",
  "jolly",
  "jovial",
  "animated",
  "lively",
  "bubbly",
  "energetic",
  "playful",
  "mischievous",
  "laughing",
  "grinning",
  "smiling",
  "beaming",
  "sparkling",
  "quickwitted",
  "witty",
  "clever",
  "brilliant",
  "genius",
  "smart",
  "intelligent",
  "wise",
  "bright",
  "shrewd",
  "astute",
  "perceptive",
  "discerning",
  "incisive",
  "insightful",
  "keen",
  "penetrating",
];

const animals = [
  "dog",
  "cat",
  "rabbit",
  "hamster",
  "guineapig",
  "chinchilla",
  "hedgehog",
  "ferret",
  "gerbil",
  "mouse",
  "rat",
  "sugarglider",
  "degu",
  "squirrel",
  "chipmunk",
  "chinchilla",
  "horse",
  "donkey",
  "zebra",
  "rhino",
  "hippo",
  "giraffe",
  "okapi",
  "pig",
  "boar",
  "peccary",
  "camel",
  "llama",
  "alpaca",
  "vicuna",
  "guanaco",
  "monkey",
  "ape",
  "baboon",
  "chimpanzee",
  "gibbon",
  "gorilla",
  "lemur",
  "marmoset",
  "tamarin",
  "wallaby",
  "kangaroo",
  "koala",
  "wombat",
  "possum",
  "cuscus",
];
