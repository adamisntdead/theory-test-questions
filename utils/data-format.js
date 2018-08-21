// A small helper script to format the question data

const fs = require("fs");

const data = fs.readdirSync("data");
const questions = data.map(filename =>
  JSON.parse(fs.readFileSync(`data/${filename}`))
);

fs.writeFileSync("data.json", JSON.stringify(questions));
