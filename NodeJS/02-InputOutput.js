import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";

const readLine = createInterface({ input: stdin, output: stdout });

const name = await readLine.question("What is your name?\n");
const age = await readLine.question("What is your age?\n");

const birthYear = new Date().getFullYear() - age;
const response = await readLine.question(
  `Hi ${name}, you were born in ${birthYear}, right? (y/n)\n`
);

if (response[0].toUpperCase() === "N") {
  console.log(`I'm sorry. Your birth year is ${birthYear - 1}.`);
}

readLine.close();
