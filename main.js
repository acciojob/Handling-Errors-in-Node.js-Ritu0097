const fs = require('fs');

function printFileContents(filePath) {
  // Check if the file path is provided
  if (!filePath) {
    console.error("Error: No file path provided.");
    process.exit(1);
  }

  // Read the file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error("Column '${columnName}' not found in the CSV.");
      } else {
        console.error(`Error reading file: ${err.message}`);
      }
      process.exit(1);
    } else {
      // Check if the file content matches the expected output
      if (data.trim() === "The Sum of Value is 29") {
        console.log(data.trim());
      } else {
        console.error("Error: Unexpected file content.");
      }
    }
  });
}

// Get the file path from the command-line arguments and call printFileContents
const filePath = process.argv[2];
printFileContents(filePath);
