const fs = require("fs");
// const book = {
//   title: "ma bite",
//   author: "Joseph Jose"
// }

// const bookJSON = JSON.stringify(book);
// // fs.writeFileSync('1-json.json', bookJSON);
// // fs.readFileSync('1-json.json');
const data = JSON.parse(fs.readFileSync("./1-json.json").toString());
data.name = "Raja";
data.age = 32;
fs.writeFileSync("./1-json.json", JSON.stringify(data));
