const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, "data.json");


// Sync (Simple, blocks the thread)

fs.readFileSync(filePath, "utf-8")