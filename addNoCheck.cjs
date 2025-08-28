const fs = require("fs");
const path = require("path");

const directory = path.join(__dirname, "src"); // <-- apne src folder ka path

function addNoCheckToFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Agar already @ts-nocheck hai toh skip
  if (!content.startsWith("// @ts-nocheck")) {
    content = "// @ts-nocheck\n" + content;
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✔ Added // @ts-nocheck to ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
      addNoCheckToFile(filePath);
    }
  }
}

walkDir(directory);
console.log("🚀 All .ts and .tsx files patched with // @ts-nocheck");
