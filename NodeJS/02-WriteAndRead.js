import { readFile, writeFile } from "node:fs/promises";

const data = await readFile("./file/data.txt", "utf-8");
const keychain = await readFile("./file/keychain.txt", "utf-8");

const result = data
  .split("")
  .map((currentChar) => {
    const charCode = currentChar.charCodeAt(0) - keychain;
    return String.fromCharCode(charCode);
  })
  .join("");

await writeFile("./file/decrypted.txt", result);
console.log("done");
