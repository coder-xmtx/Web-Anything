import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const server = createServer(async (req, res) => {
  res.statusCode = 200;

  // 根目录
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    const htmlFile = await readFile("./file/example.html", "utf-8");
    res.end(htmlFile);
  }

  // JSON 文件
  else if (req.url === "/data.json") {
    res.setHeader("Content-Type", "application/json");
    const data = await readFile("./file/data.json", "utf-8");
    res.end(data);
  }

  // 404
  else {
    res.setHeader("Content-Type", "text/html");
    const htmlFile = await readFile("./file/404.html", "utf-8");
    res.end(htmlFile);
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
