const crypto = require("crypto");

const randomString = crypto.randomBytes(20).toString("hex");

const fileName = `${randomString}.jpg`;

console.log(fileName);
