import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JS_TEMPLATE_FILE = path.join(__dirname, "./bundlerTemplateJS.js");
const CSS_TEMPLATE_FILE = path.join(__dirname, "./bundlerTemplateCSS.js");
const DIST_FILEPATH = path.join(__dirname, "../dist/assets");
const BUNDLER_FILENAME = "unityChatBundle.js";
const BUNDLER_FILEPATH = path.join(
  __dirname,
  `../dist/assets/${BUNDLER_FILENAME}`
);

let jsFiles;
let cssFiles;

// removes the previous bundler if present
function removePreviousBundler() {
  try {
    fs.unlinkSync(BUNDLER_FILEPATH);
    console.log("old bundler deleted");
  } catch {
    console.log("did not delete old bundler");
  }
}

// get all asset file names
function getFilenames() {
  const files = fs.readdirSync(DIST_FILEPATH);

  if (files.length === 0) throw new Error("no files found in directory");

  jsFiles = files.filter((file) => file.match(/\.js$/));
  cssFiles = files.filter((file) => file.match(/\.css$/));

  console.log(`js files found = ${jsFiles.length}`);
  console.log(`css files found = ${cssFiles.length}`);
}

// assembles bundler js file dynamically accounting for file names and length
function assembleBundler() {
  function generateDataFromTemplate(filename, varname, type) {
    if (type !== "css" && type !== "js") {
      throw new Error("js or css expected as file type");
    }

    const template = type === "js" ? JS_TEMPLATE_FILE : CSS_TEMPLATE_FILE;
    let fileData = fs.readFileSync(template, { encoding: "utf-8" });

    fileData = fileData.replace(/%{filename}%/g, filename);
    fileData = fileData.replace(/varname/g, varname);

    return fileData;
  }

  function writeToBundler(data) {
    try {
      fs.appendFileSync(BUNDLER_FILEPATH, data);
    } catch {
      throw new Error("writing to file failed");
    }
  }

  for (const index in jsFiles) {
    const data = generateDataFromTemplate(
      jsFiles[index],
      `script${index}`,
      "js"
    );
    writeToBundler(data);
  }

  for (const index in cssFiles) {
    const data = generateDataFromTemplate(
      cssFiles[index],
      `stylesheet${index}`,
      "css"
    );
    writeToBundler(data);
  }
}

// main
removePreviousBundler();
getFilenames();
assembleBundler();
console.log("bundler successfully generated ");
