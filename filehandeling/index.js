// writeFile
// readFile
// unlink (delets file)
// mkdir (created a new folder)
// rmdir (removes already existing folder)

import fs from "node:fs/promises";

// writing a file in node
await fs.writeFile("demo.txt","This is content of file\nNew line");


try {
    // reading a file in node
    const content = await fs.readFile("demo.txt","utf-8");
    console.log(content);
} catch (error) {
    console.log("File does not exits");
}

try {
    // deleting a file in node
    await fs.unlink("demo.txt");
} catch (error) {
    console.log("File doesnot exits");   
}

// creating folder in node

fs.mkdir("randomfolder");

try {
    // removing folder using node
  await fs.rmdir("randomfolder");
} catch (error) {
    console.log("Folder doesnot exits");
}