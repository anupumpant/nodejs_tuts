const fs = require("fs");

console.log(global);

global.setTimeout(() => {
  console.log("3 seconds have passed");
  clearInterval(int);
}, 3000);

const int = global.setInterval(() => {
  console.log("1 second passed");
}, 1000);

fs.readFile("./file.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last line of code");

fs.writeFile("file_write.txt", "This is an example written file", () => {
  console.log("File was written");
});
