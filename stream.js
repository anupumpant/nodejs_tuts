const fs = require("fs");

const filestream = fs.ReadStream("long_file.txt");
filestream.on("data", (chunk) => {
  console.log(chunk);
});
